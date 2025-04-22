---
title: Overview of Workflow
sidebar_position: 1
---

# Workflow : Overview
> **Description**  
The Workflow Module in REGLA 2.0 is designed to increase productivity by enabling users to create and customize workflows tailored to specific business needs. It automates repetitive tasks and supports seamless integration of data, logic, and processes. Within the REGLA application, workflow plays a critical role in orchestrating operations such as IFRS 9 calculation, risk modeling, and reporting automation.

---

## Key Functions and Purpose

- Automate repetitive, manual processes
- Improve accuracy and reduce human error
- Integrate API calls, logic, and database operations
- Customize process flows based on dynamic business rules
- Streamline end-to-end operations for financial modeling and reporting

Tailored for financial institutions operating in highly regulated environments, this module enables users to:

- **Design and customize workflows** to match internal processes without relying heavily on IT or developers.
- **Automate recurring tasks**, such as report generation, data processing, or parameter configuration, significantly reducing manual effort.
- **Enhance productivity and accuracy** by enforcing step-by-step logic through predefined conditions and API integrations.
- **Monitor and manage tasks** in real-time with complete audit trails, improving transparency and traceability across teams.
- **Accelerate implementation** of regulatory changes by allowing users to build and simulate changes directly from the user interface.

This module supports the operational execution of IFRS 9, ECL modeling, SLIK reporting, and other compliance workflows by being fully configurable, data-integrated, and API-driven.


---

## Workflow Process Diagram

The process begins by creating a Workflow Header and detailing the logic. Users define logic through drag-and-drop actions and configure the required API integrations. Once defined, the system automatically saves it as a draft. Users can simulate, publish, or run the workflow, which then triggers backend processes, executes procedures, and returns results.

![image](/img/wf-2.png)

The image represents a **step-by-step flow of how a workflow is created, executed, and completed** in REGLA 2.0. Here's the breakdown:

1.	**Start:** The user initiates the workflow creation.
2.	**Create Workflow Header:** Metadata and high-level info about the workflow are entered and stored.
3.	**Create Workflow Detail:** The user defines the process flow, logic elements, and sequence.
4.	**Drag and Drop Logic & Data Elements:** The user adds API calls, calculation logic, data inputs/outputs using a visual designer.
5.	**Define API Process & Properties:** Workflow is enriched with API logic (GET/POST) using the API Management repository.
6.	**Auto-Save Draft:** The system automatically saves progress to ensure no data loss.
7.	**Publish the Workflow:** Once complete, the workflow is published and versioned.
8.	**Run / Simulate:** The workflow can be simulated in a test environment before execution.
9.	**Hit API Run:** Triggering starts through an API call or scheduled task.
10.	**Trigger the Worker (Kafka):** The task is executed asynchronously via Kafka stream for scalability.
11.	**Execute Stored Procedure (AlloyDB):** Core logic is processed in AlloyDB for high-performance execution.
12.	**Get Result or Response:** System fetches and returns output/results to the user or the next process.
13.	**End:** Workflow is successfully executed and logged.

:::info

- White boxes : manual/user actions.
- Blue boxes : automated/system actions.
:::


---

## Workflow Components

![image](/img/wf-1.png)

The workflow comprises key components such as workflow headers, details, logic elements, and API integration. Users can drag-and-drop logic components, simulate, publish, and execute workflows to trigger tasks via backend services like AlloyDB.

The core components of REGLA's Workflow Module include:
- **Workflow Header:** Acts as the main identity and metadata container for the entire workflow process. It includes workflow name, version, and category.
- **Workflow Detail:** The detailed logic and structure, defining every step in the process, data mapping, execution order, and API calls.
- **Drag-and-Drop Designer:** A low-code interface for building logic, integrating data sources, and connecting API calls seamlessly.
- **API Management Integration:** Centralized interface to link each workflow step with external/internal APIs. Enables dynamic configuration without hardcoding.
- **Simulation & Testing Engine:** Allows users to simulate workflow scenarios before production publishing, ensuring logic integrity.
- **Task Executor / Worker (Kafka-enabled):** Executes backend processes based on triggered events or schedules.
- **AlloyDB Processing Engine:** Executes complex data logic and calculations efficiently through stored procedures.
- **Audit Trail & Logs:** Tracks every action and result for compliance and diagnostic purposes.


---

## Navigating the Workflow Menu
- You can find the Workflow menu by clicking on the "Application Menu" button on the bottom-left of the application.

![image](/img/rm-1.png)

---

## Creating New Workflow

- To create a new workflow, click on "Create" button.

- A new created worklow should appear on the grid view and click on it to open the workflow.

![image](/img/wf-14.png)

---

## Features on the Workflow

![image](/img/wf-15.png)

- There are several general features that you can find within the workflow that you can use :

    - **Elements**  
        Elements are a pre-defined and required component that you use to create the logic of your workflow based on your preferences. Elements are available in the tool-box located on the left of the workflow canvas.

        [Details on workflow elements](/docs/user-stories/workflow/workflow-elements.md)

    - **Actions**  
        Workflow provides several actions that you can do to the workflow such as **Run, Simulate, Publish, Deactivate**

        [Details on workflow actions](/docs/user-stories/workflow/workflow-action.md)

    - **Workflow Template**  
        Workflow also provides template system where you can choose to get pre-defined workflow and you can also create new template for future uses.

        [Details on workflow template](/docs/user-stories/workflow/workflow-template.md)

    - **Scheduler**  
        The scheduler feature allows workflows to run automatically based on predefined schedules, ensuring timely execution without manual intervention.

        [Details on workflow scheduler](/docs/user-stories/workflow/workflow-schedule.md)

    - **Resource Variables**  
        The resource variable feature captures and stores the outcome of a previous process, making it easily accessible for use in next steps—ensuring seamless data flow throughout the workflow.

        [Details on resource variable](/docs/user-stories/workflow/resource-variable.md)

---

