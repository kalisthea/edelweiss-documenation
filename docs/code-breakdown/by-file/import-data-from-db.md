---
title: import_data_from_db.py
sidebar_position: 1
---

# 📂 File : import_data_from_db.py
This file consists of code that handles data retrieval.



<!-- Get Table Value -->

## **⚙️ get_table_value(conn, activity_code)**
```python
def get_table_value(conn,activity_code):
```
> **Function Description**  
To get table(s) used for a certain element process based on the activity code input.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `activity_code` | `string`    | Activity code to filter used data.|
---
<span class="bold-large">**🔷 Step 1 : Check Database Connection**</span> 
```python
if conn:
```
> This checks if the `conn` object (the database connection) is valid. If it's `none` or otherwise evaluates to `False`, the function will not proceed with the database query.
---
<span class="bold-large">**🔷 Step 2 : Cursor Creation**</span> 
```python
cursor = conn.cursor()
```
> Cursor is used to execute SQL queries and fetch results from the database.
---
<span class="bold-large">**🔷 Step 3 : Database Query**</span> 
```python
query = """ SELECT
                    a.variable,
                    a."value" as value_variable,
                    a.type_data,
                    b.table_name,
                    b.value
                    FROM public."WorkflowResourceVariables" as a
                    left join public."WorkflowResourceTables" as b
                    on a.pkid=b.workflow_resource_variables_pkid
                    where a.activity_code=%s """
```
> This query retrieves the informations needed to run an element process based on the provided activity code.  

**More Information**  
`where a.activity_code=%s` , %s is a placeholder.
:::info

**Why do we use the %s placeholder?**  
To prevent SQL injection vulnerabilities.
:::
---
<span class="bold-large">**🔷 Step 4 : Retrieving Data**</span> 
```python
df = pd.read_sql_query(query, conn, params=(activity_code,))
```
> `pd.read_sql_query` function executes the query and retrieve the results into a Pandas DataFrame.
---
<span class="bold-large">**🔷 Step 5 : Return Dataframe**</span> 
```python
return df
```
> Function returns dataframe containing the query result.
---
<!-- MEV_DATA-->

## **⚙️ mev_data(conn, pkid)**
```python
def mev_data(conn, pkid):
```
> **Function Description**  
To retrieve data from the `MevResultFileDetail` table based on the activity code provided.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `pkid` | `string`    | Activity code to filter used data.|
---
<span class="bold-large">**🔷 Step 1 : Check Database Connection**</span> 
```python
if conn:
```
> This checks if the `conn` object (the database connection) is valid. If it's `none` or otherwise evaluates to `False`, the function will not proceed with the database query.
---
<span class="bold-large">**🔷 Step 2 : Cursor Creation**</span> 
```python
cursor = conn.cursor()
```
> Cursor is used to execute SQL queries and fetch results from the database.
---
<span class="bold-large">**🔷 Step 3 : Database Query**</span> 
```python
query = "SELECT me_periode, mev_code_master as me_code, me_value FROM public.\"MevResultFileDetail\" WHERE activity_code= %s"
```
> This query retrieves the MEV data from the row where it matches the activity code.  

**More Information**  
`where a.activity_code=%s` , %s is a placeholder.
:::info

**Why do we use the %s placeholder?**  
To prevent SQL injection vulnerabilities.
:::
---
<span class="bold-large">**🔷 Step 4 : Retrieving Data**</span> 
```python
df = pd.read_sql_query(query, conn, params=(pkid,))
```
> `pd.read_sql_query` function executes the query and retrieve the results into a Pandas DataFrame.
---
<span class="bold-large">**🔷 Step 5 : Return Dataframe**</span> 
```python
return df
```
> Function returns dataframe containing the query result.
---
<!-- ODR_DATA-->

## **⚙️ odr_data(conn, pkid)**
```python
def odr_data(conn, pkid):
```
> **Function Description**  
To retrieve data from the `OdrResultFileDetail` table based on the activity code provided.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `pkid` | `string`    | Activity code to filter used data.|
---
<span class="bold-large">**🔷 Step 1 : Check Database Connection**</span> 
```python
if conn:
```
> This checks if the `conn` object (the database connection) is valid. If it's `none` or otherwise evaluates to `False`, the function will not proceed with the database query.
---
<span class="bold-large">**🔷 Step 2 : Cursor Creation**</span> 
```python
cursor = conn.cursor()
```
> Cursor is used to execute SQL queries and fetch results from the database.
---
<span class="bold-large">**🔷 Step 3 : Database Query**</span> 
```python
query = "SELECT base_date as period, pd_role_name, odr FROM public.\"OdrResultFileDetail\" WHERE activity_code= %s"
```
> This query retrieves ODR data from the row where it matches the activity code.  

**More Information**  
`where a.activity_code=%s` , %s is a placeholder.
:::info

**Why do we use the %s placeholder?**  
To prevent SQL injection vulnerabilities.
:::
---
<span class="bold-large">**🔷 Step 4 : Retrieving Data**</span> 
```python
df = pd.read_sql_query(query, conn, params=(pkid,))
```
> `pd.read_sql_query` function executes the query and retrieve the results into a Pandas DataFrame.
---
<span class="bold-large">**🔷 Step 5 : Return Dataframe**</span> 
```python
return df
```
> Function returns dataframe containing the query result.
---

<!-- Check Status -->

## **⚙️ check_status(conn,pkid)**
```python
def check_status(conn,pkid):
```
> **Function Description**  
To retrieve activity code status from `ApplicationEngineServices` table. (Run/Success/Cancelled)
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `pkid` | `string`    | Activity code to filter used data.|
---
<span class="bold-large">**🔷 Step 1 : Check Database Connection**</span> 
```python
if conn:
```
> This checks if the `conn` object (the database connection) is valid. If it's `none` or otherwise evaluates to `False`, the function will not proceed with the database query.
---
<span class="bold-large">**🔷 Step 2 : Cursor Creation**</span> 
```python
cursor = conn.cursor()
```
> Cursor is used to execute SQL queries and fetch results from the database.
---
<span class="bold-large">**🔷 Step 3 : Database Query**</span> 
```python
query = "SELECT activity_code,label,run_status FROM public.\"ApplicationEngineServices\" WHERE activity_code= %s"
```
> This query retrieves activity code run status from the table ApplicationEngineServices. 

**More Information**  
`where a.activity_code=%s` , %s is a placeholder.
:::info

**Why do we use the %s placeholder?**  
To prevent SQL injection vulnerabilities.
:::
---
<span class="bold-large">**🔷 Step 4 : Retrieving Data**</span> 
```python
df = pd.read_sql_query(query, conn, params=(pkid,))
```
> `pd.read_sql_query` function executes the query and retrieve the results into a Pandas DataFrame.
---
<span class="bold-large">**🔷 Step 5 : Return Dataframe**</span> 
```python
return df
```
> Function returns dataframe containing the query result.
---
