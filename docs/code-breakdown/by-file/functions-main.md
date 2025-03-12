---
title: functions_main.py
sidebar_position: 1
---

# 📂 File : functions_main.py
This file consists of the main functions for the process of each element.

## **⚙️ mevtransformation(activity_code)**
```python
def mevtransformation(activity_code):
```
> **Function Description**  
This function performs the steps of data transformation on Macroeconomics Value (MEV) data.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `activity_code` | `string`    | Activity code to filter data.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| value / value_cleanmev is none | Error that shows up when no value/value_cleanmev is not found.|
| MEV is empty | Error that shows up when `clean_mev()` returns empty dataframe.|
| `Exception` | Error that occurs throughout the process.|
---
<span class="bold-large">**🔷 Step 1 : Establish Database Connection**</span> 
```python
conn = get_connection()
```
> Fetches a database connection object. If unavailable, processing halts.

**Referenced Function**  
[db-connect.py ➡️ get_connection()](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-get_connection)

---
<span class="bold-large">**🔷 Step 2 : Retrieving Table Values**</span> 
```python
df_detail = get_table_value(conn, activity_code)
```
> Retrieve used table based on the activity code of the data transformation element.

**Referenced Function**  
[import_data_from_db.py ➡️ get_table_value(conn, activity_code)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-get_table_valueconn-activity_code)

---
<span class="bold-large">**🔷 Step 3 : Retrieving Activity Code Values**</span> 
```python
value = df_detail[df_detail['table_name'] == 'TransformationVariables']['value'].values[0]
value_cleanmev = df_detail[df_detail['table_name'] == 'PyMeCleanedVariable']['value'].values[0]
```
> Retrieve the activity code used to fetch correct transformation data.
---
<span class="bold-large">**🔷 Step 4 : Retrieve Value Error Handler**</span> 
```python
 if value is None or value_cleanmev is None:
            end_time = datetime.datetime.now()
            return update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', 'table not found', activity_code)
```
> Handling error cause by transformation variables/cleaned MEV data value retrieval. If error found, updates log status ‘error’ with ‘table not found’ as the error message.

**Referenced Function**  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  

---
<span class="bold-large">**🔷 Step 45 : Get Cleaned MEV Dataframe**</span> 
```python
 df_mev = clean_mev(conn, value_cleanmev)
        if len(df_mev) == 0:
            end_time = datetime.datetime.now()
            return update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', 'MEV is empty', activity_code)
```
> Getting the correct cleaned MEV data based on the activity code retrieved before. If retrieval error, update log activity status with error message.

**Referenced Function**  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  

---

## **⚙️ odrtransformation(activity_code)**