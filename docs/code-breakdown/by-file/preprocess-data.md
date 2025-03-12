---
title: preprocess_data.py
sidebar_position: 1
---

# 📂 File : preprocess_data.py
This file consists of code that handles data cleaning processes.

## **⚙️ cleaning_data(df_mev)**
```python
def cleaning_data(df_mev):
```
> **Function Description**  
This function performs data cleaning (filling NaN and interpolation) on MEV dataframe.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `df_mev` | `pandas.DataFrame`   | Dataframe that contains historical MEV data.|
---
<span class="bold-large">**🔷 Step 1 : Datetime Conversion**</span> 
```python
df_mev['me_periode'] = pd.to_datetime(df_mev['me_periode'], format='%Y-%m-%d')
```
> Converts the 'me_periode' column to datetime format.
---
<span class="bold-large">**🔷 Step 2 : First Day Mask**</span> 
```python
first_day_mask = df_mev['me_periode'].dt.is_month_start
```
> Create a mask to identify the rows with the first day of the month.
---
<span class="bold-large">**🔷 Step 3 : Grouping and Pivoting**</span> 
```python
df_mev['year_month'] = df_mev['me_periode'].dt.to_period('M')
pivot_table = pd.pivot_table(data=df_mev, index=['year_month', 'me_code', 'me_periode'], values='me_value', aggfunc='first')
```
> Group data by 'me_code' and the year-month part of the 'me_periode'.
---
<span class="bold-large">**🔷 Step 4 : Reset Index and Drop First Day Data**</span> 
```python
pivot_table = pivot_table.reset_index()
pivot_table = pivot_table[~first_day_mask]
```
> Resets the index of the pivot table.  
Removes rows where 'me_periode' was the first day of the month (using the `first_day_mask`).
---
<span class="bold-large">**🔷 Step 5 : Convert 'year_month' to End of Month**</span> 
```python
pivot_table['year_month'] = pivot_table['year_month'].dt.to_timestamp() + pd.DateOffset(months=1, days=-1)
```
> Converting ‘year_month’ into timestamps and adjust timestamps to the last day of each month.
---
<span class="bold-large">**🔷 Step 6 : Pivoting**</span> 
```python
pivot_table = pivot_table.pivot(index='year_month', columns='me_code', values='me_value')
pivot_table = pivot_table.reset_index()
pivot_table.columns.name = None
pivot_table = pivot_table.rename(columns={'year_month': 'me_periode'})
```
> Pivot the table again, reset index and rename ‘year_month’ to ‘me_periode’.
---
<span class="bold-large">**🔷 Step 7 : Drop Columns with High NaN Percentage**</span> 
```python
nan_percentage = pivot_table.isnull().mean() * 100
nan_percentage_threshold = 30
columns_to_drop = nan_percentage[nan_percentage > nan_percentage_threshold].index
pivot_table = pivot_table.drop(columns=columns_to_drop)
```
> Calculate the NaN percentage for each column and drop the column if the percentage is > 30%.
---
<span class="bold-large">**🔷 Step 8 : Fill NaN Values and Interpolate**</span> 
```python
pivot_table = pivot_table.fillna(method='bfill')
pivot_table = pivot_table.reset_index(drop=True)
pivot_table['me_periode'] = pd.to_datetime(pivot_table['me_periode'])
pivot_table = pivot_table.set_index('me_periode').resample('M').asfreq().interpolate(method='linear').reset_index()
```
> Filling NaN values with backward fill (bfill) and interpolate missing values using linear interpolation.
---
<span class="bold-large">**🔷 Step 9 : Returns Dataframe**</span> 
```python
return pivot_table
```
> Returns dataframe containing cleaned data.
---

## **⚙️ cleaning_data_odr(conn,df, activity_code)**
```python
def cleaning_data_odr(conn,df, activity_code)::
```
> **Function Description**  
This function contains code to clean Observed Default Rate (ODR) data given in the parameter.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `conn` | `psycopg2.extensions.connection`    | Database connection object.|
| `df` | `pandas.DataFrame`   | Dataframe that contains ODR historical data.|
| `activity_code` | `string`    | Activity code to filter data.|
---
<span class="bold-large">**🔷 Step 1 : Datetime Conversion**</span> 
```python
df_mev['me_periode'] = pd.to_datetime(df_mev['me_periode'], format='%Y-%m-%d')
```
> Converts the 'me_periode' column to datetime format.
---
<span class="bold-large">**🔷 Step 2 : First Day Mask**</span> 
```python
first_day_mask = df_mev['me_periode'].dt.is_month_start
```
> Create a mask to identify the rows with the first day of the month.
---
<span class="bold-large">**🔷 Step 3 : Grouping and Pivoting**</span> 
```python
df_mev['year_month'] = df_mev['me_periode'].dt.to_period('M')
pivot_table = pd.pivot_table(data=df_mev, index=['year_month', 'me_code', 'me_periode'], values='me_value', aggfunc='first')
```
> Group data by 'me_code' and the year-month part of the 'me_periode'.
---
<span class="bold-large">**🔷 Step 4 : Reset Index and Drop First Day Data**</span> 
```python
pivot_table = pivot_table.reset_index()
pivot_table = pivot_table[~first_day_mask]
```
> Resets the index of the pivot table.  
Removes rows where 'me_periode' was the first day of the month (using the `first_day_mask`).
---
<span class="bold-large">**🔷 Step 5 : Convert 'year_month' to End of Month**</span> 
```python
pivot_table['year_month'] = pivot_table['year_month'].dt.to_timestamp() + pd.DateOffset(months=1, days=-1)
```
> Converting ‘year_month’ into timestamps and adjust timestamps to the last day of each month.
---
<span class="bold-large">**🔷 Step 6 : Pivoting**</span> 
```python
pivot_table = pivot_table.pivot(index='year_month', columns='me_code', values='me_value')
pivot_table = pivot_table.reset_index()
pivot_table.columns.name = None
pivot_table = pivot_table.rename(columns={'year_month': 'me_periode'})
```
> Pivot the table again, reset index and rename ‘year_month’ to ‘me_periode’.
---
<span class="bold-large">**🔷 Step 7 : Drop Columns with High NaN Percentage**</span> 
```python
nan_percentage = pivot_table.isnull().mean() * 100
nan_percentage_threshold = 30
columns_to_drop = nan_percentage[nan_percentage > nan_percentage_threshold].index
pivot_table = pivot_table.drop(columns=columns_to_drop)
```
> Calculate the NaN percentage for each column and drop the column if the percentage is > 30%.
---
<span class="bold-large">**🔷 Step 8 : Fill NaN Values and Interpolate**</span> 
```python
pivot_table = pivot_table.fillna(method='bfill')
pivot_table = pivot_table.reset_index(drop=True)
pivot_table['me_periode'] = pd.to_datetime(pivot_table['me_periode'])
pivot_table = pivot_table.set_index('me_periode').resample('M').asfreq().interpolate(method='linear').reset_index()
```
> Filling NaN values with backward fill (bfill) and interpolate missing values using linear interpolation.
---
<span class="bold-large">**🔷 Step 9 : Returns Dataframe**</span> 
```python
return pivot_table
```
> Returns dataframe containing cleaned data.
---

## **⚙️ cleandata(activity_code)**
```python
def cleandata(activity_code):
```
> **Function Description**  
This function contains code to clean Observed Default Rate (ODR) data given in the parameter.
---
<span class="bold-large">**📌 Parameters**</span>
| Name   | Type | Description |
| -------| ---- | ----------- |
| `activity_code` | `string`    | Activity code to filter data.|

<span class="bold-large">**📌 Raises**</span>
| Error Type | Description |
| ---- | ----------- |
| `Execption` | Error message caused by the MEV data process.
|             | General error that pops up in the whole process.|
|              | Error caused by the ODR data process.|
---
<span class="bold-large">**🔷 Step 1 : Establish Database Connection**</span> 
```python
conn = get_connection()
```
> Fetches a database connection object. If unavailable, processing halts.

**Referenced Function**  
[db-connect.py ➡️ get_connection()](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-get_connection)

---
<span class="bold-large">**🔷 Step 2 : Fetching Data from Database**</span> 
```python
df_table = get_table_value(conn, activity_code)
table_name = df_table['table_name'][0]
value = df_table['value'][0]
```
> Get table name (MevResultFileDetail or OdrResultFileDetail) and activity code value.

**Referenced Function**  
[import_data_from_db.py ➡️ get_table_value(conn, activity_code)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-get_table_valueconn-activity_code)

**More Information**  
Retrieved activity code value is used to get the data needed in the cleaning process.

---
<span class="bold-large">**🔷 Step 3 : Table Checking**</span> 
```python
if df_table is None : 
            end_time = datetime.datetime.now()
            update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', '', activity_code)

```
> If no table found, updates ApplicationEngineServices database with endtime and status error for the corresponding activity code.

**Referenced Function**  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)

**More Information**  
Python is unable to read status directly, therefore we update the status in ApplicationEngineServices database.

---
<span class="bold-large">**🔷 Step 4 : MEV or ODR Process Check**</span> 
```python
if table_name == 'MevResultFileDetail':
	# MEV data cleaning code
elif table_name == 'OdrResultFileDetail':
	# ODR data cleaning code
```
> If the table_name retrieved is `MevResultFileDetail` , code will continue to the MEV data cleaning process and if the table_name is `OdrResultFileDetail` , it will proceed to the ODR data cleaning process.
---
<span class="bold-large">**🔷 Step 5 : MEV Data Cleaning**</span> 
```python
df_mev = mev_data(conn, value)
```
> Calls `mev_data` function to retrieve MEV data from the `MevResultFileDetail` table.

**Referenced Function**  
[import_data_from_db.py ➡️ mev_data(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-mev_dataconn-pkid)

```python
clean_mev = cleaning_data(df_mev)
```
> Calls `cleaning_data` function to clean the `df_mev` dataframe.

**Referenced Function**  
[import_data_from_db.py ➡️ cleaning_data(df_mev)](/docs/code-breakdown/by-file/preprocess-data#%EF%B8%8F-cleaning_datadf_mev)

```python
clean_mev = pd.melt(clean_mev.reset_index(drop=True), id_vars=['me_periode'], var_name='me_code', value_name='me_value')
clean_mev['activity_code'] = activity_code
```
> Uses the `pd.melt` function to "unpivot" the dataframe and adds a new ‘activity_code’ column and populate it with the activity code value and print the cleaned MEV data.

```python
detail_status = check_status(conn,activity_code)
status = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]
destination_table = "public.\"PyMeCleanedVariable\""
append_dataframe_to_sql(conn, clean_mev, destination_table,status)
```
> Define the table name in database where the cleaned MEV data will be stored and use the `append_dataframe_to_sql` function to insert the cleaned data.

**Referenced Function**  
[db-connect.py ➡️ check_status(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid)  
[db-connect.py ➡️ append_dataframe_to_sql(conn, dataframe, destination_table,status)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-append_dataframe_to_sqlconn-dataframe-table_name-status)

```python
detail_status = check_status(conn,activity_code)
status = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]
if status != 'cancelled':
    end_time = datetime.datetime.now()
    update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'successful', '', activity_code)
else:
    delete_data(conn,destination_table,activity_code)
```
> Updating the status of the activity code to ‘successful’ if the retrieved run status is not ‘cancelled’, and if the run status is ‘cancelled’ then run the `delete_data` function to delete the data insertion.

**Referenced Function**  
[db-connect.py ➡️ check_status(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid)  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  
[db-connect.py ➡️ delete_data(conn, table_name, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-delete_dataconn-table_name-activity_code)

```python
except Exception as e
                print(f"Error processing MEV data: {e}")
                error_message = str(e)
                end_time = datetime.datetime.now()
                update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', error_message, activity_code)
```
> This part of the code handles the error in processing MEV data. If error is found then updates the `ApplicationEngineServices` database with status ‘Error’.

**Referenced Function**  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  

---
<span class="bold-large">**🔷 Step 6 : ODR Data Cleaning**</span> 
```python
df_odr = odr_data(conn, value)
print(df_odr)
```
> Retrieves ODR data according to the activity code and put it in the dataframe variable and prints it out.

**Referenced Function**  
[import_data_from_db.py ➡️ odr_data(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-odr_dataconn-pkid)

```python
clean_odr = cleaning_data_odr(conn, df_odr, activity_code)
```
> Clean ODR data using the function `cleaning_data_odr` and pass the parameter needed.

**Referenced Function**  
[import_data_from_db.py ➡️ cleaning_data_odr(conn,df, activity_code)](/docs/code-breakdown/by-file/preprocess-data#%EF%B8%8F-cleaning_data_odrconndf-activity_code)

```python
clean_odr['logit_odr'] = logit(clean_odr['odr'])
clean_odr['activity_code'] = activity_code
```
> Calculates the logit transformation of the ‘odr’ column in the cleaned ODR data and put the values in a new column named ‘logit_odr’. This code also adds new ‘activity_code’ column containing the activity code value.

```python
detail_status = check_status(conn, activity_code)
status = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]
destination_table = "public.\"OdrLogitResult\""
append_dataframe_to_sql(conn, clean_odr, destination_table, status)
```
> Define the table name in database where the cleaned ODR data will be stored and use the `append_dataframe_to_sql` function to insert the cleaned data.

**Referenced Function**  
[db-connect.py ➡️ check_status(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid)  
[db-connect.py ➡️ append_dataframe_to_sql(conn, dataframe, destination_table,status)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-append_dataframe_to_sqlconn-dataframe-table_name-status)

```python
detail_status = check_status(conn, activity_code)
status = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]
if status != 'cancelled':
    end_time = datetime.datetime.now()
    update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'successful', '', activity_code)
else:
    delete_data(conn, destination_table, activity_code)
```
> Updating the status of the activity code to ‘successful’ if the retrieved run status is not ‘cancelled’, and if the run status is ‘cancelled’ then run the `delete_data` function to delete the data insertion.

**Referenced Function**  
[db-connect.py ➡️ check_status(conn, pkid)](/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid)  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  
[db-connect.py ➡️ delete_data(conn, table_name, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-delete_dataconn-table_name-activity_code)

```python
except Exception as e:
    error_message = str(e)
    # Log or handle errors related to ODR data processing here
    print(f"Error processing ODR data: {e}")
    end_time = datetime.datetime.now()
    update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', error_message, activity_code)
else:
    end_time = datetime.datetime.now()
    update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', 'empty data', activity_code)
```
> This part of the code handles the error in processing ODR data. If error is found then updates the `ApplicationEngineServices` database with status ‘Error’.

**Referenced Function**  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  

---
<span class="bold-large">**🔷 Step 7 : Data Cleaning Process Error Handler**</span>
```python
 except Exception as e:
        print(f"Conn error: {conn}")
        print(f"An unexpected error occurred: {e}")
        end_time = datetime.datetime.now()
        update_log(conn, "public.\"ApplicationEngineServices\"", end_time, 'error', '', activity_code)
```
> This code handles general error that may occur outside the specific data cleaning sections..

**Referenced Function**  
[db-connect.py ➡️ update_log(conn, table_name, enddate, status, message, activity_code)](/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code)  

---