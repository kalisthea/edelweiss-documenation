---
title: Risk Modeling Elements
sidebar_position: 1
---

# Risk Modeling Elements
> **Description**  
Details of elements within the workflow

---

## What are Elements?

- Elements are a required component used to build your workflows for generating models and forward looking prediction.

- The output of the workflow will be determined by how you set up criterias and parameters within the elements.

---

## Types of Elements in Generate Modeling Process

Here are the list of elements you can use in the [Generate Modeling Process](/docs/user-stories/risk-modeling/generate-model.md) menu.


### Get File

- You can use "Get File" element to upload data into the workflow.  
    Example : MEV or ODR Files.

- You can choose to upload directly from your device or from the File Manager.

- There will be a field to define whether you have uploaded MEV or ODR Data.

- On the mapping section, you can select the data you want to use or left out in the modeling process.

---

### Assignment

- "Assignment" element is used to run logical function such as **Data Cleansing, Stationarity Test, and MEV Combination Process.**

- You can choose which tasks you want to run by choosing one of the options available on the API field. Here are the information of which API you should choose.

:::info 

Data Cleansing : DataCleansings  
Stationarity Test : StationaryDataTest  
MEV Combination : MEVCombination  

:::

- You need to set up the required variable values needed execute the API process to gain results.

---

### Dataset

- "Dataset" element is used to set up insample and outsample range that will be used to train the model within the process.

- Setting up the insample range is mandatory while you can choose not to set the outsample range.

---

### Transform Data

- "Transform Data" is used to transform dataset.

- On the object field, you input the output data from previous element to provide the data needed for the transformation process.

- You can set the data type to determine whether the transformation process is used for MEV or ODR Data.

- On the "Transformation" section, you can select which transformations you want to use for each variables of MEV or ODR data.

---

### Expected Trend Test

- "Expected Trend Test" element is used to perform expected trend test in the modeling process.

- On the object field, you input the output data from previous element to provide the data needed for expected trend test process.

- You need provide the trend value of each variables to positive, negative or both.

---

### Correlation Test

- "Correlation Test" element is used to perform correlation test in the modeling process.

- You need to input independent and dependent value needed based on the output of previous elements process.

- You can choose between two methods : Pearson Correlation or Univariative Linear Regression.

- You need to setup a threshold for the correlation test.

---


### Regression

- "Regression" element is used to perform regression test in the modeling process.

- You are required to input independent, dependent value and MEV Transformation data from the previous elements that had been set up before.

- You need to set up the values of criterias based on your preferences to perform the regresion test such as, the method, minimal adjusted r-squared, pass threshold and significant p-value.

- You can choose one out of four regression methods available : Linear Regression, Random Forest, XGBoost, and Deep Learning.

- For the OLS Regression Assumption part, you need to set up the threshold for each OLS test.

- You can check the "Mandatory" checkbox to ensure when the model did not pass the mandatory OLS test method, the result of the checked method will not be shown at all when viewing from the Model Manager.

---

## Types of Elements in Forward Looking Prediction

Here are the list of elements you can use in the [Forward Looking Prediction](/docs/user-stories/risk-modeling/forward-looking.md) menu.

### Forecast MEV

- "Forecast MEV" element is used to perform ARIMA on MEV data.

- You need to choose which running and successful source flow you want to use from the Generate Modeling Process.

- You can choose which MEV Variable you want to perform forecasting with and set the period of how far you want to forecast the value.

- You can choose whether you want to use Auto ARIMA or manually set up the parameters of ARIMA process.

- SARIMAX is also an available option if you have chosen not to use Auto ARIMA.

---

### Transform Forecast MEV

- "Transform Forecast MEV" is used to transform the previously forecasted MEV variables.

- You need to input the previously forecasted MEV element as the object and the form will automatically show the transformation for the variable based on the source flow selected.

- Tranformation source flow will automatically follow the previous forecast configuration.

---

### Weighting

- "Weighting" element is used to perform weighting scenario.

- The form will automatically input the previous transformation element done within the workflow.

- You have to input the detail of the weighting scenario in the field provided below : Baseline Percentage, Upside Percentage, and Downside Percentage (baseline value needs to be greater than upside and downside value).

---

### Assignment

- "Assignment" element in forward looking process is used to **predict ODR value**.

- You have to choose "Predicted ODR" in the API field.

- You are required to input variables needed to perform ODR prediction.

- Source flow and source object are automatically inputted by the system based on the previous process.

- You can set the Best Model to filter out the Model Sequence.

- Model Sequence are shown based on the model sequence that contains the MEV chosen prior in the forecast step.

---

