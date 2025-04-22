---
title: Workflow Elements
sidebar_position: 1
---

# Workflow Elements
> **Description**  
Details of elements within the workflow

---

## What are Elements?

- Elements are a required component used to build your workflows. When dragged into the canvas, it becomes a subflow.

- The output of the workflow will be determined by how you set up criterias and parameters within the elements.

---


## Toolbox
> **Description**  
Toolbox contains provided pre-defined elements needed to create the workflow.

- You can find the toolbox on the left-side of the workflow.

- Drag the elements from the toolbox into the workflow canvas to create a subflow.


:::warning Restrictions

- Elements names should be minimum of 4 characters and valid characters (alphanumeric, single space and underscores).
- Duplicate element names are not allowed (must be unique) within one workflow canvas.
:::

---

### Get Record

- Get Record element is **used to retrieve records** from the database, including setting up filters for specific criterias.

- Use this element when you want to pull data/records from the system that are related to the process.

---


### Assignment

- Assignment element is used to assign specific task or variable to **perform logical function.**
- You can choose the task from the API field dropdown. (nanti ada satu section menjelaskan setiap API dan ke link ke sini)

---

### Decision

- Decision element is used to create multiple paths which **allows a single flow to have different output** results based on the decision criteria.

- You can use this element for handling different outcomes based on input values.

---

### Parallel

- The parallel element enables the **creation of branching logic that runs multiple processes simultaneously without predefined conditions**, allowing for dynamic, adaptable workflows that can start independently and scale up to five levels of nested decision logic.

- Use this element to perform simultaneous process where each process doesn't have to wait on each other to execute to the next one.
---

## Show Result Element

- You can show the result of each subflow by clicking right mouse-button on the selected subflow.

    ![image](/img/wf-5.png)


- A menu will pop-up that shows the result in tables.

- "Analysis" option is also available where users are able to view the results in the form of chart (pie chart, line chart, and bar chart).

- You are able to export data to CSV, XLSX, and PDF format of the selected subflow.

    ![image](/img/wf-6.png)

---




