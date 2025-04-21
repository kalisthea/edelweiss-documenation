---
title: Workflow Actions
sidebar_position: 1
---

# Workflow Actions
> **Description**  
Details of actions that can be done within the workflow.

---

## Run

- You can run the workflow by choosing one of these two options,  
    - **Run from detail workflow**  
        You can run the workflow from the button on the top of the workflow.

         ![image](/img/wf-8.png)

    - **Run from grid view**  
        You can run multiple selected workflow from the grid view.

:::warning Restrictions

- You can run **"Active" and "Not Running"** workflows.
- You can run **"Success" or "Failed"** workflows.
- You cannot run **"Inactive" or "Running"** workflows.
:::

---

## Simulate

- You can use simulate to check whether all the subflow that has been set up is running well before publishing.

- Click on the "Simulate" button available on the top of the workflow.

![image](/img/wf-10.png)

- You can check the [Execution Log](/docs/user-stories/workflow/activity-history.md) to check for any error details from the simulation.



:::warning Restrictions

- You can only simulate **"Draft" or "Deactivated"** workflows.
- You cannot simulate **"Published"** workflows.

:::


---

## Publish

- To publish, click on the "Publish" button available on the top of the workflow.

![image](/img/wf-9.png)

- You can choose "New Workflow" option if you don't want to create a template of the current workflow.

- If you want to create a new template you can choose ["New Workflow and Template"](/docs/user-stories/workflow/workflow-template.md).

    
- By publishing a workflow, it will change the workflow status to "Published" and "Active".

- Run button will also be enabled.


:::warning Restrictions

- You can only publish **"Draft"** workflows.

:::

---

## Deactivate

- You can choose to deactivate unused workflows.

- To deactivate, click on the "Deactivate" button available on the top of the workflow.

![image](/img/wf-11.png)

:::warning Restrictions

- You can deactivate **"Success" or "Failed"** status workflows.

- You cannot deactivate **"Inactive" or "Draft" or "In Progress"** workflows.

- System will check for validation whether the workflow has relation to other service or records. It cannot be deactivated if it didn't pass the validation.

:::


---