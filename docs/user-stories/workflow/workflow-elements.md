---
title: Workflow Elements
sidebar_position: 1
---

# Workflow Elements
> **Description**  
Here you can find the explanation of each elements used in the workflow module of REGLA 2.0.

---

## What are Workflow Elements?

- In the REGLA 2.0 Workflow Module, **Workflow Elements** are the core building blocks used to design, structure, and control how a process is executed step-by-step. These elements form the logic layer of the workflow and are used to configure actions, decisions, data handling, and parallel executions that align with a specific business or regulatory objective.

- Placed within the **Workflow Canvas**, these elements allow users to create subflows that replicate real-life business rules or technical logic — from data fetching to complex branching conditions — **without coding**. These modular components are reusable, intuitive, and critical to enabling automation in a visual and logical manner.

- Workflow Elements are the building blocks of each workflow in the REGLA application. They are available in the Toolbox and allow users to define logic structures and flows.


---


## Toolbox - The Workflow Element Panel

- The **Toolbox** is located on the **left-hand side** of the workflow builder interface and acts as a repository of predefined logic blocks. Users can **drag and drop elements** from this toolbox directly onto the canvas to start designing a subflow.

- Each element within the toolbox is tailored to perform a specific function — from retrieving records, assigning values, evaluating conditions, to triggering parallel actions.



:::warning Usage Guidelines

- Each element must have a **name with a minimum of 4 characters**.
- **Only vaild characters are allowed** : alphanumeric, single space and underscores
- Each element name must be **unique** within the same workflow canvas — no duplicates allowed.
:::

---

## Key Elements in the Toolbox

Below are the standard elements available in the REGLA Workflow Toolbox:

### Get Record

![image](/img/wf-16.png)

- **Function:** Used to retrieve or query data from a source (such as a database or API).
- **Use Case:** Ideal for fetching customer profiles, loan data, model parameters, or reporting metadata before the next process begins.
- **Configuration:** Users select a data source, define query parameters, and map the returned results to variables.


---


### Assignment

![image](/img/wf-17.png)

- **Function:** Assigns values or variables that will be used later in the workflow.
- **Use Case:** Used to define a variable such as a calculated risk score, ECL threshold, or temporary flag before triggering another action.
- **Configuration:** Supports assignment of constants, expressions, or referenced data from previous steps.


---

### Decision

![image](/img/wf-18.png)

- **Function:** Implements conditional branching logic based on set criteria.
- **Use Case:** Directs the flow to different paths based on conditions — for example, whether the PD score exceeds a certain value, or if a SLIK flag is marked 'Red'.
- **Configuration:** Conditions can be expressed in logical format (e.g., if, else if, else branches).


---

### Parallel

![image](/img/wf-19.png)

- **Function:** Allows multiple actions or logic paths to execute simultaneously.
- **Use Case:** Great for executing several independent API calls or processes at the same time — such as fetching data from different systems, or running multiple calculations concurrently.
- **Configuration:** Synchronizes results and waits for all branches to complete before continuing to the next step.



By combining these elements, users can construct dynamic and highly customized workflows that match internal business processes or regulatory logic with minimal development time. This modularity and visual configurability are what make REGLA 2.0 a powerful tool for process automation and compliance modeling.

---

## Show Result Element

- You can show the result of each subflow by clicking right mouse-button on the selected subflow.

    ![image](/img/wf-5.png)


- A menu will pop-up that shows the result in tables.

- "Analysis" option is also available where users are able to view the results in the form of chart (pie chart, line chart, and bar chart).

- You are able to export data to CSV, XLSX, and PDF format of the selected subflow.

    ![image](/img/wf-6.png)

---




