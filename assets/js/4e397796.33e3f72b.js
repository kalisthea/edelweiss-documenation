"use strict";(self.webpackChunkregla_docs=self.webpackChunkregla_docs||[]).push([[5673],{5316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"code-breakdown/by-file/preprocess-data","title":"preprocess_data.py","description":"This file consists of code that handles data cleaning processes.","source":"@site/docs/code-breakdown/by-file/preprocess-data.md","sourceDirName":"code-breakdown/by-file","slug":"/code-breakdown/by-file/preprocess-data","permalink":"/edelweiss-documenation/docs/code-breakdown/by-file/preprocess-data","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"preprocess_data.py","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"consumer.py","permalink":"/edelweiss-documenation/docs/code-breakdown/by-file/consumer"},"next":{"title":"transform_data.py","permalink":"/edelweiss-documenation/docs/code-breakdown/by-file/transform-data"}}');var s=t(4848),d=t(8453);const r={title:"preprocess_data.py",sidebar_position:1},c="\ud83d\udcc2 File : preprocess_data.py",i={},o=[{value:"<strong>\u2699\ufe0f cleaning_data(df_mev)</strong>",id:"\ufe0f-cleaning_datadf_mev",level:2},{value:"<strong>\u2699\ufe0f cleaning_data_odr(conn,df, activity_code)</strong>",id:"\ufe0f-cleaning_data_odrconndf-activity_code",level:2},{value:"<strong>\u2699\ufe0f cleandata(activity_code)</strong>",id:"\ufe0f-cleandataactivity_code",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-file--preprocess_datapy",children:"\ud83d\udcc2 File : preprocess_data.py"})}),"\n",(0,s.jsx)(n.p,{children:"This file consists of code that handles data cleaning processes."}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-cleaning_datadf_mev",children:(0,s.jsx)(n.strong,{children:"\u2699\ufe0f cleaning_data(df_mev)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cleaning_data(df_mev):\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Description"}),(0,s.jsx)(n.br,{}),"\n","This function performs data cleaning (filling NaN and interpolation) on MEV dataframe."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udccc Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"df_mev"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pandas.DataFrame"})}),(0,s.jsx)(n.td,{children:"Dataframe that contains historical MEV data."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 1 : Datetime Conversion"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_mev['me_periode'] = pd.to_datetime(df_mev['me_periode'], format='%Y-%m-%d')\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Converts the 'me_periode' column to datetime format."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 2 : First Day Mask"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"first_day_mask = df_mev['me_periode'].dt.is_month_start\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Create a mask to identify the rows with the first day of the month."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 3 : Grouping and Pivoting"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_mev['year_month'] = df_mev['me_periode'].dt.to_period('M')\r\npivot_table = pd.pivot_table(data=df_mev, index=['year_month', 'me_code', 'me_periode'], values='me_value', aggfunc='first')\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Group data by 'me_code' and the year-month part of the 'me_periode'."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 4 : Reset Index and Drop First Day Data"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table = pivot_table.reset_index()\r\npivot_table = pivot_table[~first_day_mask]\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Resets the index of the pivot table.",(0,s.jsx)(n.br,{}),"\n","Removes rows where 'me_periode' was the first day of the month (using the ",(0,s.jsx)(n.code,{children:"first_day_mask"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 5 : Convert 'year_month' to End of Month"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table['year_month'] = pivot_table['year_month'].dt.to_timestamp() + pd.DateOffset(months=1, days=-1)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Converting \u2018year_month\u2019 into timestamps and adjust timestamps to the last day of each month."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 6 : Pivoting"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table = pivot_table.pivot(index='year_month', columns='me_code', values='me_value')\r\npivot_table = pivot_table.reset_index()\r\npivot_table.columns.name = None\r\npivot_table = pivot_table.rename(columns={'year_month': 'me_periode'})\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Pivot the table again, reset index and rename \u2018year_month\u2019 to \u2018me_periode\u2019."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 7 : Drop Columns with High NaN Percentage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"nan_percentage = pivot_table.isnull().mean() * 100\r\nnan_percentage_threshold = 30\r\ncolumns_to_drop = nan_percentage[nan_percentage > nan_percentage_threshold].index\r\npivot_table = pivot_table.drop(columns=columns_to_drop)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Calculate the NaN percentage for each column and drop the column if the percentage is > 30%."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 8 : Fill NaN Values and Interpolate"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table = pivot_table.fillna(method='bfill')\r\npivot_table = pivot_table.reset_index(drop=True)\r\npivot_table['me_periode'] = pd.to_datetime(pivot_table['me_periode'])\r\npivot_table = pivot_table.set_index('me_periode').resample('M').asfreq().interpolate(method='linear').reset_index()\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Filling NaN values with backward fill (bfill) and interpolate missing values using linear interpolation."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 9 : Returns Dataframe"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"return pivot_table\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Returns dataframe containing cleaned data."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-cleaning_data_odrconndf-activity_code",children:(0,s.jsx)(n.strong,{children:"\u2699\ufe0f cleaning_data_odr(conn,df, activity_code)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cleaning_data_odr(conn,df, activity_code)::\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Description"}),(0,s.jsx)(n.br,{}),"\n","This function contains code to clean Observed Default Rate (ODR) data given in the parameter."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udccc Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"conn"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"psycopg2.extensions.connection"})}),(0,s.jsx)(n.td,{children:"Database connection object."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"df"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pandas.DataFrame"})}),(0,s.jsx)(n.td,{children:"Dataframe that contains ODR historical data."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"activity_code"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Activity code to filter data."})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 1 : Datetime Conversion"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_mev['me_periode'] = pd.to_datetime(df_mev['me_periode'], format='%Y-%m-%d')\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Converts the 'me_periode' column to datetime format."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 2 : First Day Mask"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"first_day_mask = df_mev['me_periode'].dt.is_month_start\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Create a mask to identify the rows with the first day of the month."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 3 : Grouping and Pivoting"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_mev['year_month'] = df_mev['me_periode'].dt.to_period('M')\r\npivot_table = pd.pivot_table(data=df_mev, index=['year_month', 'me_code', 'me_periode'], values='me_value', aggfunc='first')\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Group data by 'me_code' and the year-month part of the 'me_periode'."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 4 : Reset Index and Drop First Day Data"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table = pivot_table.reset_index()\r\npivot_table = pivot_table[~first_day_mask]\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Resets the index of the pivot table.",(0,s.jsx)(n.br,{}),"\n","Removes rows where 'me_periode' was the first day of the month (using the ",(0,s.jsx)(n.code,{children:"first_day_mask"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 5 : Convert 'year_month' to End of Month"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table['year_month'] = pivot_table['year_month'].dt.to_timestamp() + pd.DateOffset(months=1, days=-1)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Converting \u2018year_month\u2019 into timestamps and adjust timestamps to the last day of each month."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 6 : Pivoting"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table = pivot_table.pivot(index='year_month', columns='me_code', values='me_value')\r\npivot_table = pivot_table.reset_index()\r\npivot_table.columns.name = None\r\npivot_table = pivot_table.rename(columns={'year_month': 'me_periode'})\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Pivot the table again, reset index and rename \u2018year_month\u2019 to \u2018me_periode\u2019."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 7 : Drop Columns with High NaN Percentage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"nan_percentage = pivot_table.isnull().mean() * 100\r\nnan_percentage_threshold = 30\r\ncolumns_to_drop = nan_percentage[nan_percentage > nan_percentage_threshold].index\r\npivot_table = pivot_table.drop(columns=columns_to_drop)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Calculate the NaN percentage for each column and drop the column if the percentage is > 30%."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 8 : Fill NaN Values and Interpolate"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"pivot_table = pivot_table.fillna(method='bfill')\r\npivot_table = pivot_table.reset_index(drop=True)\r\npivot_table['me_periode'] = pd.to_datetime(pivot_table['me_periode'])\r\npivot_table = pivot_table.set_index('me_periode').resample('M').asfreq().interpolate(method='linear').reset_index()\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Filling NaN values with backward fill (bfill) and interpolate missing values using linear interpolation."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 9 : Returns Dataframe"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"return pivot_table\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Returns dataframe containing cleaned data."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-cleandataactivity_code",children:(0,s.jsx)(n.strong,{children:"\u2699\ufe0f cleandata(activity_code)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cleandata(activity_code):\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Description"}),(0,s.jsx)(n.br,{}),"\n","This function contains code to clean Observed Default Rate (ODR) data given in the parameter."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udccc Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"activity_code"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Activity code to filter data."})]})})]}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udccc Raises"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Error Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Execption"})}),(0,s.jsx)(n.td,{children:"Error message caused by the MEV data process."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"General error that pops up in the whole process."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Error caused by the ODR data process."})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 1 : Establish Database Connection"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"conn = get_connection()\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Fetches a database connection object. If unavailable, processing halts."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-get_connection",children:"db-connect.py \u27a1\ufe0f get_connection()"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 2 : Fetching Data from Database"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_table = get_table_value(conn, activity_code)\r\ntable_name = df_table['table_name'][0]\r\nvalue = df_table['value'][0]\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Get table name (MevResultFileDetail or OdrResultFileDetail) and activity code value."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-get_table_valueconn-activity_code",children:"import_data_from_db.py \u27a1\ufe0f get_table_value(conn, activity_code)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"More Information"}),(0,s.jsx)(n.br,{}),"\n","Retrieved activity code value is used to get the data needed in the cleaning process."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 3 : Table Checking"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"if df_table is None : \r\n            end_time = datetime.datetime.now()\r\n            update_log(conn, \"public.\\\"ApplicationEngineServices\\\"\", end_time, 'error', '', activity_code)\r\n\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If no table found, updates ApplicationEngineServices database with endtime and status error for the corresponding activity code."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code",children:"db-connect.py \u27a1\ufe0f update_log(conn, table_name, enddate, status, message, activity_code)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"More Information"}),(0,s.jsx)(n.br,{}),"\n","Python is unable to read status directly, therefore we update the status in ApplicationEngineServices database."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 4 : MEV or ODR Process Check"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"if table_name == 'MevResultFileDetail':\r\n\t# MEV data cleaning code\r\nelif table_name == 'OdrResultFileDetail':\r\n\t# ODR data cleaning code\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If the table_name retrieved is ",(0,s.jsx)(n.code,{children:"MevResultFileDetail"})," , code will continue to the MEV data cleaning process and if the table_name is ",(0,s.jsx)(n.code,{children:"OdrResultFileDetail"})," , it will proceed to the ODR data cleaning process."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 5 : MEV Data Cleaning"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_mev = mev_data(conn, value)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Calls ",(0,s.jsx)(n.code,{children:"mev_data"})," function to retrieve MEV data from the ",(0,s.jsx)(n.code,{children:"MevResultFileDetail"})," table."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-mev_dataconn-pkid",children:"import_data_from_db.py \u27a1\ufe0f mev_data(conn, pkid)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"clean_mev = cleaning_data(df_mev)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Calls ",(0,s.jsx)(n.code,{children:"cleaning_data"})," function to clean the ",(0,s.jsx)(n.code,{children:"df_mev"})," dataframe."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/preprocess-data#%EF%B8%8F-cleaning_datadf_mev",children:"import_data_from_db.py \u27a1\ufe0f cleaning_data(df_mev)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"clean_mev = pd.melt(clean_mev.reset_index(drop=True), id_vars=['me_periode'], var_name='me_code', value_name='me_value')\r\nclean_mev['activity_code'] = activity_code\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Uses the ",(0,s.jsx)(n.code,{children:"pd.melt"}),' function to "unpivot" the dataframe and adds a new \u2018activity_code\u2019 column and populate it with the activity code value and print the cleaned MEV data.']}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"detail_status = check_status(conn,activity_code)\r\nstatus = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]\r\ndestination_table = \"public.\\\"PyMeCleanedVariable\\\"\"\r\nappend_dataframe_to_sql(conn, clean_mev, destination_table,status)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Define the table name in database where the cleaned MEV data will be stored and use the ",(0,s.jsx)(n.code,{children:"append_dataframe_to_sql"})," function to insert the cleaned data."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid",children:"db-connect.py \u27a1\ufe0f check_status(conn, pkid)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-append_dataframe_to_sqlconn-dataframe-table_name-status",children:"db-connect.py \u27a1\ufe0f append_dataframe_to_sql(conn, dataframe, destination_table,status)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"detail_status = check_status(conn,activity_code)\r\nstatus = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]\r\nif status != 'cancelled':\r\n    end_time = datetime.datetime.now()\r\n    update_log(conn, \"public.\\\"ApplicationEngineServices\\\"\", end_time, 'successful', '', activity_code)\r\nelse:\r\n    delete_data(conn,destination_table,activity_code)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Updating the status of the activity code to \u2018successful\u2019 if the retrieved run status is not \u2018cancelled\u2019, and if the run status is \u2018cancelled\u2019 then run the ",(0,s.jsx)(n.code,{children:"delete_data"})," function to delete the data insertion."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid",children:"db-connect.py \u27a1\ufe0f check_status(conn, pkid)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code",children:"db-connect.py \u27a1\ufe0f update_log(conn, table_name, enddate, status, message, activity_code)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-delete_dataconn-table_name-activity_code",children:"db-connect.py \u27a1\ufe0f delete_data(conn, table_name, activity_code)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'except Exception as e\r\n                print(f"Error processing MEV data: {e}")\r\n                error_message = str(e)\r\n                end_time = datetime.datetime.now()\r\n                update_log(conn, "public.\\"ApplicationEngineServices\\"", end_time, \'error\', error_message, activity_code)\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This part of the code handles the error in processing MEV data. If error is found then updates the ",(0,s.jsx)(n.code,{children:"ApplicationEngineServices"})," database with status \u2018Error\u2019."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code",children:"db-connect.py \u27a1\ufe0f update_log(conn, table_name, enddate, status, message, activity_code)"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 6 : ODR Data Cleaning"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"df_odr = odr_data(conn, value)\r\nprint(df_odr)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Retrieves ODR data according to the activity code and put it in the dataframe variable and prints it out."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-odr_dataconn-pkid",children:"import_data_from_db.py \u27a1\ufe0f odr_data(conn, pkid)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"clean_odr = cleaning_data_odr(conn, df_odr, activity_code)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Clean ODR data using the function ",(0,s.jsx)(n.code,{children:"cleaning_data_odr"})," and pass the parameter needed."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/preprocess-data#%EF%B8%8F-cleaning_data_odrconndf-activity_code",children:"import_data_from_db.py \u27a1\ufe0f cleaning_data_odr(conn,df, activity_code)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"clean_odr['logit_odr'] = logit(clean_odr['odr'])\r\nclean_odr['activity_code'] = activity_code\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Calculates the logit transformation of the \u2018odr\u2019 column in the cleaned ODR data and put the values in a new column named \u2018logit_odr\u2019. This code also adds new \u2018activity_code\u2019 column containing the activity code value."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"detail_status = check_status(conn, activity_code)\r\nstatus = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]\r\ndestination_table = \"public.\\\"OdrLogitResult\\\"\"\r\nappend_dataframe_to_sql(conn, clean_odr, destination_table, status)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Define the table name in database where the cleaned ODR data will be stored and use the ",(0,s.jsx)(n.code,{children:"append_dataframe_to_sql"})," function to insert the cleaned data."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid",children:"db-connect.py \u27a1\ufe0f check_status(conn, pkid)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-append_dataframe_to_sqlconn-dataframe-table_name-status",children:"db-connect.py \u27a1\ufe0f append_dataframe_to_sql(conn, dataframe, destination_table,status)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"detail_status = check_status(conn, activity_code)\r\nstatus = detail_status[detail_status['activity_code'] == activity_code]['run_status'].values[0]\r\nif status != 'cancelled':\r\n    end_time = datetime.datetime.now()\r\n    update_log(conn, \"public.\\\"ApplicationEngineServices\\\"\", end_time, 'successful', '', activity_code)\r\nelse:\r\n    delete_data(conn, destination_table, activity_code)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Updating the status of the activity code to \u2018successful\u2019 if the retrieved run status is not \u2018cancelled\u2019, and if the run status is \u2018cancelled\u2019 then run the ",(0,s.jsx)(n.code,{children:"delete_data"})," function to delete the data insertion."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/import-data-from-db#%EF%B8%8F-check_statusconnpkid",children:"db-connect.py \u27a1\ufe0f check_status(conn, pkid)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code",children:"db-connect.py \u27a1\ufe0f update_log(conn, table_name, enddate, status, message, activity_code)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-delete_dataconn-table_name-activity_code",children:"db-connect.py \u27a1\ufe0f delete_data(conn, table_name, activity_code)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'except Exception as e:\r\n    error_message = str(e)\r\n    # Log or handle errors related to ODR data processing here\r\n    print(f"Error processing ODR data: {e}")\r\n    end_time = datetime.datetime.now()\r\n    update_log(conn, "public.\\"ApplicationEngineServices\\"", end_time, \'error\', error_message, activity_code)\r\nelse:\r\n    end_time = datetime.datetime.now()\r\n    update_log(conn, "public.\\"ApplicationEngineServices\\"", end_time, \'error\', \'empty data\', activity_code)\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This part of the code handles the error in processing ODR data. If error is found then updates the ",(0,s.jsx)(n.code,{children:"ApplicationEngineServices"})," database with status \u2018Error\u2019."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code",children:"db-connect.py \u27a1\ufe0f update_log(conn, table_name, enddate, status, message, activity_code)"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("span",{class:"bold-large",children:(0,s.jsx)(n.strong,{children:"\ud83d\udd37 Step 7 : Data Cleaning Process Error Handler"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:' except Exception as e:\r\n        print(f"Conn error: {conn}")\r\n        print(f"An unexpected error occurred: {e}")\r\n        end_time = datetime.datetime.now()\r\n        update_log(conn, "public.\\"ApplicationEngineServices\\"", end_time, \'error\', \'\', activity_code)\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This code handles general error that may occur outside the specific data cleaning sections.."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referenced Function"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/code-breakdown/by-file/db-connect#%EF%B8%8F-update_logconn-table_name-enddate-status-message-activity_code",children:"db-connect.py \u27a1\ufe0f update_log(conn, table_name, enddate, status, message, activity_code)"})]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(6540);const s={},d=a.createContext(s);function r(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);