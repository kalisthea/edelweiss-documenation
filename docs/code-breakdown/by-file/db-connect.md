---
title: db_connect.py
sidebar_position: 1
---

# 📂 File : db_connect.py
This file consists of code that handles database connection and update.

<!-- Get Connection -->

## **⚙️ get_connection()**

```python
def get_connection() -> psycopg2.extensions.connection | None:
```
> **Function Description**  
This function establishes a connection to a PostgreSQL database using predefined credentials.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| _None_ | -    | This function does not take any arguments.|

<span class="bold-large">**📌 Outputs**</span>
| Type | Description |
| ---- | ----------- |
| `psycopg2.extensions.connection` | A valid PostgreSQL connection object.|
| `none` | Returned if the connection attempt fails.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| `psycopg2.Error` | Raised when the function encounters an issue while connecting to the database.|

---

<span class="bold-large">**🔷 Step 1 : Attempt to Establish a Database Connection**</span> 
```python
conn = psycopg2.connect(
    user=postgres_user,
    password=postgres_password,
    host=postgres_host,
    port=postgres_port,
    database=postgres_db
)
```
> Connects to PostgreSQL using credentials stored in global variables.
:::info

**Why are credentials stored in global variables?**  
To centralize configuration management and enhance security by avoiding hardcoded values.

:::
---

<span class="bold-large">**🔷 Step 2 : Handling Connection Errors**</span>
```python
except (Exception, psycopg2.Error) as error:
    print("Error while connecting to PostgreSQL", error)
    return None
```
> Catches any exceptions raised during connection attempts and prints the error message.
---

<!-- Append Dataframe -->

## **⚙️ append_dataframe_to_sql(conn, dataframe, table_name, status)**
```python
def append_dataframe_to_sql(conn, dataframe, table_name, status):
```
> **Function Description**  
This function inserts dataframe into database.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `dataframe` | `pandas.DataFrame`   | Contains dataframe that are going to be appended.|
| `table_name` | `string`   | Destination table.|
| `status` | `string`    | Activity status.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| `psycopg2.Error` | Error in data appending process.|

---
<span class="bold-large">**🔷 Step 1 : Status Check**</span> 
```python
try:
if status != 'cancelled':
cursor = conn.cursor()
```
> Check passed status, if it is ‘cancelled’ data insertion is skipped.
---
<span class="bold-large">**🔷 Step 2 : Check for Existing Record**</span> 
```python
existing_query = "SELECT activity_code FROM %s WHERE activity_code = %%s LIMIT 1" % table_name
modelid = str(dataframe['activity_code'].iloc[0])
print(existing_query, modelid)
cursor.execute(existing_query, (modelid,))
existing_records = cursor.fetchall()
```
> Checking if records with the same activity code already exists in the table.
---
<span class="bold-large">**🔷 Step 3 : Delete Existing Record**</span> 
```python
if len(existing_records) > 0:
    delete_query = 'DELETE FROM %s WHERE activity_code = %%s' % table_name
    print(delete_query)
    cursor.execute(delete_query, (modelid,))
else:
    print('NO EXISTING RECORDS FOR activity_code:', modelid)
```
> If a record with activity code exists then remove the record before inserting the new data.
---
<span class="bold-large">**🔷 Step 4 : Data Conversion**</span> 
```python
dataframe.fillna(0, inplace=True)
data = [tuple(row) for row in dataframe.values]
```
> Replaces any NaN values in dataframe and converts the rows into tuples.
:::info

**Why do we need to clean and convert the data?**  
To ensure database compatibility and data insertion efficiency.

:::
---
<span class="bold-large">**🔷 Step 5 : Construct Insertion Query**</span> 
```python
insert_sql = f"""
    INSERT INTO {table_name} ({', '.join(dataframe.columns)})
    VALUES ({', '.join(['%s'] * len(dataframe.columns))})
"""
print(insert_sql)
```
> Writes a query for dataframe insertion into the destination table.
---
<span class="bold-large">**🔷 Step 6 : Batch Insertion**</span> 
```python
batch_size = 50000
fast_executemany = True
for i in range(0, len(data), batch_size):
    batch_data = data[i:i + batch_size]
    cursor.executemany(insert_sql, batch_data)
```
> Inserting data in batches while `executemany` ensures faster data insertion and efficiency.
:::info

**Why do we insert data in batches?**  
For optimization in handling large datasets. It reduces network overhead, improves database server efficiency.

:::
---
<span class="bold-large">**🔷 Step 7 : Commit and Success Message**</span> 
```python
conn.commit()
print(f"Data from DataFrame appended to the {table_name} table successfully.")
"""
print(insert_sql)
```
> Commit data append, making permanent changes in the database and return success message.
---
<span class="bold-large">**🔷 Step 8 : Error Handling**</span> 
```python
except psycopg2.Error as e:
    print(f"Error appending data to SQL: {e}")
    conn.rollback()
```
> Shows error message if an error occured in data insertion. Rollback is done to prevent partial data insertion.
---
<span class="bold-large">**🔷 Step 9 : Cursor Closure**</span> 
```python
finally:
    cursor.close()
```
> Ensures that cursor is closed at the end of the data insertion process, even when error occurs.
---

<!-- Update Log -->

## **⚙️ update_log(conn, table_name, enddate, status, message, activity_code)**
```python
def update_log(conn, table_name, enddate, status, message, activity_code):
```
> **Function Description**  
This function updates activity code status with new values according to the parameters passed.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `table_name` | `string`   | Destination table.|
| `enddate | `pandas.DataFrame`   | Contains dataframe that are going to be appended.|
| `status` | `string`    | Activity status.|
 `message` | `string`    | Error/success message explaining the status.|
  `activity_code` | `string`    | Activity code to the updated row.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| `Exception` | Show error popped up when updating database.|
---
<span class="bold-large">**🔷 Step 1 : Cursor Creation**</span> 
```python
cursor = conn.cursor()
```
> Cursor is used to execute SQL queries and fetch results from the database.
---
<span class="bold-large">**🔷 Step 2 : Construct and Execute Update Query**</span> 
```python
update_query = "UPDATE %s SET end_date = %%s, run_status =%%s, error_message = %%s WHERE activity_code = %%s" % table_name
cursor.execute(update_query, (enddate, status, message, activity_code,))
```
> Writes update query and execute data update on rows where the activity code matches.
---
<span class="bold-large">**🔷 Step 3 : Commit Update**</span> 
```python
conn.commit()
print(f"Data from DataFrame appended to the {table_name} table successfully.")
cursor.close()
```
> Permanently make changes in the database and show update success message.
---
<span class="bold-large">**🔷 Step 4 : Error Handling**</span> 
```python
 except Exception as e:
        print(f"Error updating Log and other fields: {e}")
        conn.rollback()
```
> Shows error message if an error occured in data update. Rollback is done to prevent partial data insertion.
---

<!-- Delete Data -->

## **⚙️ delete_data(conn, table_name, activity_code)**
```python
def delete_data(conn, table_name, activity_code):
```
> **Function Description**  
This function deletes data from the database based on the activity code.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `table_name` | `string`   | Destination table.|
  `activity_code` | `string`    | Activity code to the deleted row.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| `Exception` | Show error in deletion process.|
---
<span class="bold-large">**🔷 Step 1 : Cursor Creation**</span> 
```python
cursor = conn.cursor()
```
> Cursor is used to execute SQL queries and fetch results from the database.
---
<span class="bold-large">**🔷 Step 2 : Construct and Execute Deletion Query**</span> 
```python
 delete_query = "DELETE FROM %s WHERE activity_code = %%s" % table_name
 cursor.execute(delete_query, (activity_code,))
```
> Writes deletion query and execute data deletion on rows where the activity code matches.
---
<span class="bold-large">**🔷 Step 3 : Commit Deletion**</span> 
```python
conn.commit()
print(f"Row with activity_code {activity_code} deleted from the {table_name} table successfully.")
cursor.close()
```
> Permanently make changes in the database and show success deletion message.
---
<span class="bold-large">**🔷 Step 4 : Error Handling**</span> 
```python
except Exception as e:
        print(f"Error deleting Log: {e}")
        conn.rollback()
```
> Shows error message if an error occured in data deletion. Rollback is done to prevent partial data insertion.
---