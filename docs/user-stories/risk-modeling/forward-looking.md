---
title: Forward Looking Prediction
sidebar_position: 1
---

# Forward Looking Prediction
>**Description**  
Gain prediction results by implementing Forward-Looking with the models that has been generated from the [Generate Model Process](/docs/user-stories/risk-modeling/generate-model.md)
---

:::caution
- To proceed with Forward-Looking, ensure that you have a working workflow in the Generate Modeling Process.
:::

## Creating New Workflow
- To create a new forward-looking prediction workflow, click on "Create" button.

![image](/img/rm-15.png)

- A blank canvas of workflow will show upon the creation of a new workflow.

![image](/img/rm-13.png)

---

## Exploring the Workflow
### Toolbox
> On the left-side, you can find the workflow toolbox that consists of elements that you can do in the workflow. All you have to do is drag the desired process into the workflow canvas. 

- Some elements that you can use for forward-looking process are **Forecast MEV**, **Transform Forecast MEV**, **Weighting Scenario**, and **Assignment** for ODR Prediction.
---

### Workflow Status Control
> At the top-middle you can find the button to control the workflow status.
- **Run** : runs workflow.
- **Simulate** : simulates workflow.
- **Publish** : sets workflow status from draft to published.
- **Set Schedule** : sets a time to run the workflow.
- **Deactivate** : deactivates workflow.

:::info 

You can run several workflows at once by selecting the workflows in the Forward-Looking Prediction view list.

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

## Setting Workflow for Probability of Default Forward-Looking
### Forecast MEV

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | Forecast MEV | Forecast MEV | Source Flow (Cleansed MEV Data)  | 

- Use the "Forecast MEV" element from the toolbox and click on the process to show configuration settings.
- Choose a source flow from the Generate Modeling Process.
- Choose the MEV that you want to forecast.
- Set the period to set how far the forecast goes.
- You can turn on auto ARIMA or turn it off, if you want to manually set the ARIMA parameters.

:::info Guide
- Forecast MEV are done based on how many number of MEV combinations inputted in the chosen Generate Modeling Process workflow (source flow)
- After creating one forecast process, the source flow in the next one will automatically follows the initial forecast configuration.
:::
:::caution Restrictions

- Inputted month period should not be less than 12 months and have to be the multiplication of 12.

:::

---

### Forecast MEV Transformation

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | Forecast MEV | Forecast MEV | Forecast MEV, Source Flow (Transformed MEV) | 

- Use the "Transform Forecast MEV" element from the toolbox and click on the process to show configuration settings.
- Input Forecast MEV data for **Object**.
- The forecast transformation will be the same with the transformation in the source flow.

:::info Guide
- Transformation source flow will automatically follows the forecast configuration.
:::

---

### Weighting

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | Weighting | Weighting Scenario | Transform Forecast MEV Data |

- Use the "Weighting Scenario" element from the toolbox and click on the process to show configuration settings.
- Input the forecast transformations data as the source object.
- Input the desired weighting configuration.

:::caution Restrictions
- You can only add source object based on how many forecast transformation done.
:::

---

### ODR Prediction

    | Process  | Element | Prerequisite Parameters|
    | -------- | ------- | -----------------------| 
    | Predict ODR | Assignment | Weighting Data, Model Results|

- Use the "Assignment" element from the toolbox and click on the process to show configuration settings.
- Choose "Predicted ODR" for the **API Name** input.
- Source object and source flow are automatically determined by the system based on the process before.
- You can set the Best Model to filter out the Model Sequence.
- Model Sequence are shown based on the model sequence that contains the MEV chosen prior in the forecast step.

---

