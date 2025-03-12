---
title: consumer.py
sidebar_position: 1
---

# 📂 File : consumer.py
This file consists of code that handles Kafka connection.

## **⚙️ load_dotenv()**

```python
from dotenv import load_dotenv
load_dotenv()
```
> **Function Description**  
To import .env that contains credentials needed for Kafka and database connection.
---
```python
kafka_user = os.getenv('KAFKA_USERNAME')  # Access the loaded variables
kafka_password = os.getenv('KAFKA_PASSWORD')
```
> Get kafka username and password credentials from the .env file imported before.  

**More Information**  
Refer to the .env file

---

## **⚙️ run_script(script_name)**
```python
def run_script(script_name):
    subprocess.run(["python", script_name])
```
> **Function Description**  
Executing `consumer.py` in terminal.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `script_name` | `string` | consumer.py as default|
---

## **⚙️ cons()**
```python
def cons():
```
> **Function Description**  
Accept and pass request to engine, executing requested process.
---
<span class="bold-large">**📌 Outputs**</span>
| Type | Description |
| ---- | ----------- |
| `string` | Error or success message.|
| `string` | Type element and activity code.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| `KafkaError._PARTITION_EOF` | Error caused by partition error.|
| `KafkaException` | Any other error outside partition error.|
| `SystemError` | `type_element` doesn’t exists in the function mapping..|
---
<span class="bold-large">**🔷 Step 1 : Establish Connection to Kafka**</span>
```python
running = True

    consumer = Consumer({'bootstrap.servers': 'kafka-dev.regla.cloud:9092',
                        'group.id': 'ReglaGroupsWorkFlowPython',
                        'auto.offset.reset': 'earliest', # jika mau push ganti jadi 'earliest'
                        #'auto.offset.reset': 'latest',
                        'max.poll.interval.ms': 80000000,
                        'session.timeout.ms': 6000,
                         # 'queued.min.messages':1000000,
                         # 'heartbeat.interval.ms':10000,
                         # 'socket.timeout.ms':60000,
                        'sasl.username': kafka_user,
                        'sasl.password': kafka_password,
                        'security.protocol': 'SASL_SSL',
                        'enable.ssl.certificate.verification': 'false',
                        'sasl.mechanism': 'PLAIN'})
    # consumer.subscribe(['WorkflowModellingPython'])
    # Topic
    topic='^WorkflowModellingPython-*' # untuk git push uncomment ini #production
    # topic = 'DataframeErrorHandling'  # git push comment ini #development
    #topic = 'Python-VicaHyundai'
```
> This code initializes Kafka that:
> - Connects to a Kafka cluster at `kafka-dev.regla.cloud:9092`.
> - Belongs to the consumer group `ReglaGroupsWorkFlowPython`.
> - Topic : to separate every message received.
---
<span class="bold-large">**🔷 Step 2 : Produce Message Checking**</span>
```python
try:
        consumer.subscribe([topic])
        while running:
            # Poll for message
            # print('Run Kafka')
            # msg = consumer.poll(timeout=2.0)
            msg = consumer.poll(100)
            if msg is None:
                continue
```
> Checking if produce message exists. Kafka will continue asking for message input until time-out.
---

<span class="bold-large">**🔷 Step 3 : Error Handler**</span>
```python
    # Handle Error
            if msg.error():
                if msg.error().code() == KafkaError._PARTITION_EOF:
                    # End of partition event
                    print('---------> Error Consumer.....')
                    sys.stderr.write('%% %s [%d] reached end at offset %d\n' %
                                     (msg.topic(), msg.partition(), msg.offset()))
            elif msg.error():
                raise KafkaException(msg.error())
            else:
                # Handle Message
                print('---------> Got message Sending Element.....')

                print('topic: %s partition:%d at offset: %d with key: %s:' %
                      (msg.topic(), msg.partition(), msg.offset(),
                       str(msg.key())))
```
> Check for error in produce message. If no error found, proceed to show message and continue process.
---
<span class="bold-large">**🔷 Step 4 : Processing Produce Message**</span>
```python
                record = json.loads(msg.value().decode('utf-8'))
                datakafka = json.loads(record['DataToken'])
                type_element = datakafka["type_element"]
                activity_code = datakafka["activity_code"]

                print(type_element)
                print(activity_code)
```
> Get “Data Token” from produce message and retrieve type element and activity code.
---
<span class="bold-large">**🔷 Step 5 : Connect to database**</span>
```python
                 conn = get_connection()
```
>  Fetches a database connection object. If unavailable, processing halts.

**Referenced Function**  
[db-connect.py ➡️ get_connection()](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-get_connection)

---
<span class="bold-large">**🔷 Step 6 : Creating Function Mapping Dictionary**</span>
```python
            	function_mapping = {
                    'DataCleansings': cleandata,
                    'TransformationMEV': mevtransformation,
                    'TransformationODR': odrtransformation,
                    'StationarityDataTest': adf_test,
                    'CorrelationTest': correlationtest,
                    'ExpectedTrend': expected_trend_test,
                    'MEVCombination': combine_mev,
                    'MEVClustering': cluster_mev,
                    'RegressionTest': linear_regression,
                    'ForecastMEV': arima_test,
                    'ForecastMEVTransform': forecast_mev_transform,
                    'WeightingScenario': scalar_weight_scenario,
                    'PredictedODR': predict_odr
                }
```
> Each keys in the dictionary represents the elements in a workflow, where all functions would be called based on the `type_element` value.
---
<span class="bold-large">**🔷 Step 7 : Status Check**</span>
```python
                detail_status = check_status(conn,activity_code)
                status = detail_status[detail_status['activity_code']
                                        == activity_code]['run_status'].values[0]
```
> Extracts `run_status` from `detail_status`, where `detail_status` data is retrieved from matching the given activity_code. 

**Referenced Function**  
[db-connect.py ➡️ check_status(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid)

---
<span class="bold-large">**🔷 Step 8 : Status Check**</span>
```python
                 if status != 'cancelled':
                    if type_element in function_mapping:
                        function_mapping[type_element](activity_code)
                        consumer.commit()
                    else:
                        raise SystemError(f"Unknown {type_element}!")
```
> If the status is not “cancelled”, check for type_element in function_mapping. If type_element found, run the element functions along with parameters passed from the activity code.
---