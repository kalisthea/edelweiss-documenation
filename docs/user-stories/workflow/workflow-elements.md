---
title: Workflow Elements
sidebar_position: 1
---

# Workflow Elements
> **Description**  
Details of elements within the workflow

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

- Get Record element is **used to retrieve records** from the database, including setting up filters for criterias.

---


### Assignment

- Assignment element is used to assign specific task or variable to **perform logical function.**
- You can choose the task from the API field dropdown.

---

### Decision

- Decision element is used to create multiple paths which **allows a single flow to have different output** results based on the decision criteria.

---

### Parallel

---

## Show Result Element

- You can show the result of each subflow by clicking right mouse-button on the selected subflow.

    ![image](/img/wf-5.png)


- A menu will pop-up that shows the result in tables.

- "Analysis" option is also available where users are able to view the results in the form of chart (pie chart, line chart, and bar chart).

- You are able to export data to CSV, XLSX, and PDF format of the selected subflow.

    ![image](/img/wf-6.png)

---




