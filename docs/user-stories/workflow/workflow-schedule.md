---
title: Scheduling Workflow
sidebar_position: 1
---

# Workflow Scheduling
> **Description**  
Details on how to create workflow scheduling

---

## Create Scheduling

- You can set run schedule by clicking on the "time" icon on the top menu.

    ![image](/img/wf-4.png)

- You can choose 2 methods to configure scheduling parameters:

    ### Manual

    - By choosing manual, you will be asked to input the frequency of how you want to run the workflow.

    - It can be once, daily, weekly, monthly, or custom occurrence.

    - After choosing the frequency, you will need to set up further criteria to exactly point the schedule.


    ### Cron Expression

    - You can directly input start date, end date and the cron expression into the provided field.

- Skip holiday flag is provided to determine whether the scheduler will skip holiday or not. If it is checked, the scheduler will not run the workflow on holidays.

- System will notify the user when a workflow is succesfully running by a scheduler.

---

## Cancel/Stop Workflow Schedule

- You can find the "Cancel Schedule" button if a schedule had been defined previously.

- By clicking the button, a notification will pop-up to confirm cancellation.

- System will notify user when the schedule is successfully cancelled.

---