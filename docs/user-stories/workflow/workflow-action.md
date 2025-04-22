---
title: Workflow Actions
sidebar_position: 1
---

# Workflow Actions
> **Description**  
**"Control. Validate. Execute. Automate."**

---

## What are Workflow Actions?

- In the **REGLA Workflow Module**, once a workflow has been designed using elements from the Toolbox and configured in the Canvas, users need powerful and flexible **execution controls** to test, activate, or manage it. That’s where **Workflow Actions** come in.

- Workflow Actions are **system commands** that allow users to run, simulate, publish, and deactivate workflows — ensuring that only validated, error-free, and fully customized processes are moved into production. These actions are embedded with logical safeguards to maintain system integrity, data consistency, and governance compliance across the entire REGLA platform.

- With these tools, users are empowered to move from design to operation confidently — **iteratively improving workflows** while minimizing the risk of errors in production environments.


## Run

![image](/img/wf-8.png)

- **Purpose:** Execute the designed workflow either individually or in bulk.
- **Execution Methods:**
    - **From Workflow Detail:** Trigger the workflow directly from its configuration screen by clicking the "Run" button at the top.
    - **From Grid View:** Run multiple selected workflows simultaneously via the grid interface for efficient batch processing.



:::warning Restrictions

- You can run workflows with status: **“Active”**, **“Not Running”**, **“Successful”**, or **“Failed”.**
- ❌ You cannot run workflows marked as **“Inactive”** or currently **“Running.”**
:::

---

## Simulate

![image](/img/wf-10.png)

- **Purpose:** Validate and test your subflows before publishing to ensure everything works as expected.
- **How It Works:**
    - Click the “Simulate” button at the top of the workflow builder.
    - The system will execute the subflows in a test mode.
    - Review errors or logic issues in the [Execution Log](/docs/user-stories/workflow/activity-history.md), which provides detailed feedback for debugging.

:::warning Restrictions

- Only **“Draft”** or **“Disabled”** workflows can be simulated.
- **“Published”** workflows cannot be simulated to avoid changes to production logic.


:::


---

## Publish

![image](/img/wf-9.png)

- **Purpose:** Finalize and activate the workflow, making it available for actual business processing.
- **Publishing Options:**
    - **New Workflow:** Publish without creating a reusable template.
    - **[New Workflow and Template](/docs/user-stories/workflow/workflow-template.md)**: Create both a published version and a reusable template for future workflows.
- **Results of Publishing:**
    - Workflow status is changed to **“Published”** and **“Active.”**
    - The **Run** button becomes available.





:::warning Restrictions

- Only workflows in **“Draft”** status can be published.
- Once published, workflows cannot be modified unless reverted to draft or copied into a new version.


:::

---

## Deactivate

![image](/img/wf-11.png)

- **Purpose:** Safely deactivate workflows that are no longer in use, preventing accidental execution.
- **How To Deactivate:**
    - Click the “Deactivate” button at the top of the workflow interface.
    - System checks for workflow dependencies — it cannot be deactivated if linked to active services or records.


:::warning Restrictions

- Only workflows with status **“Success”** or **“Failed”** are eligible.
- Workflows in “**Inactive,”** **“Draft,”** or **“In Progress”** status cannot be deactivated.


:::

---

## Summary

    | Action  | Can Be Applied To | Not Applicable To | Notes |
    | ------- | ----------------- | ----------------- | ----- |
    | Run | Active, Not Running, Success, Failed | Inactive, Running | Run from detail or bulk grid |
    | Simulate| Draft, Disabled | Published | Used for validation |
    | Publish | Draft | Published, Active, Inactive | Marks workflow as Active |
    | Deactivate | Success, Failed | Draft, Inactive, In Progress | Validation checks applied |

---

## Highlight

Workflow Actions ensure that your automation logic is not only **well-structured**, but also **governed, validated,** and **safe to operate** — a must for any financial institution running sensitive, regulation-aligned processes like IFRS 9 such as ECL calculation.

---