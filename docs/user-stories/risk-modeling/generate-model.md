---
title: Generate Modeling Process
sidebar_position: 1
---

# Generate Modeling Process
>**Description**  
Create workflow that defines the modeling process and generates model result that will be used in Forward Looking for risk forecasting. 
---

## Calculating Probability of Default (PD) with Forward-Looking
- Forward looking PD can be determined by the following step :

    - **Defining Dependent and Independent Variable** : Uploading historical MEV data and ODR data.

    - **MEV Modeling with Linear Regression** : Regression process consists of data transformation and data cleansing, single factor analysis, clustering, and model selection.

    - **Forward Looking PD** : After the models are generated from modeling process, you can proceed to the [Forward Looking Prediction Process](/docs/user-stories/risk-modeling/forward-looking.md)

        

---



## Creating New Workflow
- To create a new modeling process workflow, click on "Create" button.

![image](/img/rm-9.png)

- A blank canvas of workflow will show upon the creation of a new workflow.

![image](/img/rm-13.png)

---

## Exploring the Workflow
### Toolbox
> On the left-side, you can find the workflow toolbox that consists of elements that you can do in the workflow. All you have to do is drag the desired process into the workflow canvas. Here are some elements that you can use for modeling process.

- Use **Get File** for uploading data.
- Use **Assignment** for data cleaning, stationarity test, MEV combination. 
- Other elements that you can find in the toolbox : **Dataset**, **Transform Data**, **Expected Trend Test**, **Correlation Test**, and **Regression Test**.

---

### Workflow Status Control
> At the top-middle you can find the button to control the workflow status.
- **Run** : runs workflow.
- **Simulate** : simulates workflow.
- **Publish** : sets workflow status from draft to published.
- **Set Schedule** : sets a time to run the workflow.
- **Deactivate** : deactivates workflow.

:::info 

You can run several workflows at once by selecting the workflows in the Generate Model Process view list.

:::


:::caution Restrictions
- You **can't run** unpublished workflow.
- You **can't simulate and run**  inactive workflow.
:::

---

### Read/Edit
> Click the dropdown on the top right to change the workflow state to read/edit only.

---


### Versioning
> You can find versions history of the workflow on the top left along with the status of each versioning (draft/published).

:::info 

- Editing a published workflow will add a draft with the same version number as the one being edited.
- Once the draft is published, the version number will change into a new one.

:::

---

## Creating Workflow Process for PD
> Here are the steps in setting up the workflow to generate models to calculate Probability of Default.

![alt text](/img/rm-14.png)

---

### Uploading Historical MEV and ODR Data

    | Process  | Element | Input |
    | -------- | --- | --- |
    | Upload MEV | Get File | Historical MEV data |
    | Upload ODR | Get File  | Historical ODR data |


- Use the "Get File" element from the toolbox and click on the process to show configuration settings.
- You can upload either MEV or ODR Data in one process.
- To upload file, you can drag the file or use the file manager by choosing "From Object" in **Source**.
- In **Data Type** choose the appropriate input (MEV/ODR) based on the historical data that was uploaded

:::info 

- For **ODR File**, you have to choose the segmentation and set the time period of the ODR Data used.  
- For **MEV File**, you can observe the data mapping of the uploaded file and you can set which variables you want to use in the modeling process.

:::

---

### Setting Insample and Outsample
    | Process  | Element | Prerequisite Parameters | 
    | -------- | --- | --- |
    | Dataset | Dataset | Uploaded MEV and ODR Data  

- Use the "Dataset" element from the toolbox and click on the process to show configuration settings.
- Input the insample and outsample period. You can add and skip periods between data.

---

### Data Cleansing
    | Process  | Element | Prerequisite Parameters | 
    | -------- | --- | --- |
    | MEV Cleansing | Assignment | Uploaded MEV Data  |
    | ODR Cleansing | Assignment  | Uploaded ODR Data |


- Use the "Assignment" element from the toolbox and click on the process to show configuration settings.
- Choose "Data Cleansings" for the **API Name** input.
- Input uploaded MEV or ODR data for **Object** input.
- Input **Type of Data** accordingly based on MEV or ODR Cleansing.

:::info Configuration Example

    **API Name**    : Data Cleansings  
    **Object**      : upload mev  
    **Type of Data**: MEV  
:::

[More detail on data cleansing](/docs/user-stories/risk-modeling/rm-steps#data-cleansing)

---

### Data Transformation
    | Process  | Element | Prerequisite Parameters|
    | -------- | --- | --- |
    | Transform MEV | Transform Data | Cleaned MEV Data  |
    | Transform ODR | Transform Data  | Cleaned ODR Data |

- Use the "Transform Data" element from the toolbox and click on the process to show configuration settings.
- Input cleaned MEV or ODR data for **Object** input.
- Input **Type of Data** accordingly based on MEV or ODR Transformation.

:::info 
    Transformation for each variables are based on the **MEV Master Configuration** but you can still update the transformations for each variables.
:::

[More detail on data transformation](/docs/user-stories/risk-modeling/rm-steps#data-transformation)

---

### Stationarity Test

    | Process  | Element | Prerequisite Parameters| Input |
    | -------- | ------- | -----------------------| ----- |
    | Transform MEV | Transform Data | Transformed MEV Data  | max p-value, method |
    | Transform ODR | Transform Data  | Transformed ODR Data | max p-value, method |

- Use the "Assignment" element from the toolbox and click on the process to show configuration settings.
- Choose "StationarityDataTest" for the **API Name** input.
- Input transformed MEV or ODR data for **source_of_variable** input.
- Input **max_p_value** and **method** based on the desired testing criteria.

[More detail on stationarity test](/docs/user-stories/risk-modeling/rm-steps#stationarity-test)

---

### Correlation Test

    | Process  | Element | Prerequisite Parameters| Input |
    | -------- | ------- | -----------------------| ----- |
    | Correlation (Pearson) | Correlation Test | Stationary MEV and ODR Data  | Correlation threshold |
    | Correlation (Univariate) | Correlation Test | Stationary MEV and ODR Data  | Correlation, P Value, R Squared threshold |

- Use the "Correlation Test" element from the toolbox and click on the process to show configuration settings.
- Input stationarity MEV data for **Independent Variable** input.
- Input stationarity ODR data for **Dependent Variable** input.
- Input the rest of the parameters based on the desired testing criteria.

---

### Expected Trend Test

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | Expected Trend Test | Expected Trend Test | Ouput from correlation test  | 

- Use the "Expected Trend Test" element from the toolbox and click on the process to show configuration settings.
- Set the expected trend for each MEV Variables.

---

### MEV Combination

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | MEV Combination | Assignment | Output from MEV Transformation  | 

- Use the "Assignment" element from the toolbox and click on the process to show configuration settings.
- Choose "MEVCombination" for the **API Name** input.
- Input the number of desired group combination and MEV transformation data in the variable values setup.

:::caution Restrictions
- You can only input **2 (minimum) and 5 (maximum)** of group combination number.
:::


---

### Regression

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | Regression | Regression Test | Output from MEV Combination, MEV Transformation, Stationary ODR  | 

- Use the "Regression Test" element from the toolbox and click on the process to show configuration settings.
- Input MEV Combination data for **Independent Variable** input.
- Input Stationary ODR data for **Dependent Variable** input.
- Input MEV Transformation data for **MEV Transformation** input.
- Input the rest of the parameters based on the desired testing criteria.

:::info 
    - **Pass Threshold** : the number of method that has to pass the test in order to gain "Passed" status.
    - By checking the **Mandatory** checkbox, it will not show the result of selected method in the model manager if it doesn't pass the test.
:::
---

