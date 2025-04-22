---
title: Assignment Element API
sidebar_position: 1
---

# Assignment Element API : Explanation
> **Description**  
Here you can find the explanation of each API available in the "Assignment" element.

---

## Assignment Element Overview
The **Assignment element** in REGLA 2.0’s workflow module allows users to execute logical functions essential for impairment calculation and regulatory reporting. Each task within the Assignment element represents a discrete process step in the end-to-end Expected Credit Loss (ECL) lifecycle or related data transformation. These steps can be chained together to build complex, automated compliance workflows.

Below is a detailed explanation of each task under the Assignment element:


## Populate Impairment Simulation Data

> **Function**  
Prepares the data required to simulate impairment outcomes under different scenarios. This allows institutions to model expected losses under various economic conditions or regulatory assumptions.

---

## Generate Individual Journal Data

> **Function**   
Creates journal entries based on the most recent and accurate data as of a given reporting date. This ensures that the financial records and adjustments for impairment reflect the latest validated figures.

---

## Populate IMA Previous & Current

> **Function**  
Populates historical and current month impairment data into the Impairment Master Account (IMA). This enables comparative analysis and transition tracking between reporting periods.

---

## Update Average EIR Information

> **Function**  
Calculates and updates the average Effective Interest Rate (EIR) for financial instruments. This is critical for amortized cost calculations and accurate ECL estimates.

---

## Populate Default Account Data

> **Function**  
Fills in account-level details that have entered default status, serving as foundational data for calculating default-related metrics and projections.


---

## Generate Default Rate

> **Function**  
Computes the historical or forecasted default rate using the input data, which is a core parameter in calculating the Probability of Default (PD).

---

## Populate PD Scenario Data

> **Function**  
Loads PD (Probability of Default) data across multiple macroeconomic scenarios. This supports forward-looking impairment models and stress testing.

---

## Calculate Default Rate

> **Function**  
Executes the calculation logic for deriving the actual default rate from historical performance and account behavior data.

---


## Generate PD Cohort Summary

> **Function**  
Aggregates PD results by cohort group (e.g., by origination year or credit segment).

---


## Generate PD Cohort Result

> **Function**  
Produces the final cohort-based PD values used in ECL calculation.

---


## Generate PD Migration Analysis

> **Function**  

Analyzes the movement of accounts across risk ratings or stages over time.

---


## Generate PD Migration Analysis ENR

> **Function**  
Evaluates exposure-weighted transitions.

---


## Generate PD Migration Analysis Average

> **Function**  
Computes average migration trends.

---


## Generate PD Migration Analysis Matrix Multiplication

> **Function**  
Builds transition matrices for PD calculation.

---


## Generate PD Migration Analysis Result

> **Function**  
Outputs the final migration-based PD estimate.

---


## Generate PD Term Structure Yearly

> **Function**  
Projects PD over multiple years, reflecting lifetime expectations.

---


## Generate PD Term Structure Monthly from Yearly

> **Function**  
Converts yearly PDs to monthly values for finer granularity in short-term reporting.

---


## Generate PD Forward Looking Yearly

> **Function**  
Annual projections using forward-looking inputs.

---


## Generate PD Forward Looking Monthly from Yearly

> **Function**  
Monthly disaggregation of forward-looking yearly data.



---


## Update WO Recovery Portfolio

> **Function**  
Updates data related to written-off accounts and their recovery status. Supports LGD (Loss Given Default) and post-write-off analysis.

---


## Populate Recovery Scenario Data

> **Function**  
Loads scenario-based assumptions for expected collections post-default.

---


## Populate WO Scenario Data

> **Function**  
Loads scenario-based assumptions for scenarios where the asset is deemed uncollectible.

---


## Populate LGD Scenario Data

> **Function**  
Loads scenario-based assumptions for calculating potential losses under various circumstances.

---


## Calculate LGD Cure LGL Detail

> **Function**  
Processes account-level recovery details.

---


## Calculate LGD Cure LGL Header

> **Function**  
Aggregates cure data at a higher level for reporting and audit trails.

---


## Populate CCF Scenario Data

> **Function**  
Loads scenario data for Credit Conversion Factor (CCF), which estimates the likelihood that off-balance exposures (like credit lines) will become actual exposures.

---


## Calculate CCF Detail

> **Function**  
Calculates account-level CCF outputs.

---


## Calculate CCF Header

> **Function**  
Summarizes these calculations for portfolio-level insights.

---


## Populate ECL Master Account
  
> **Function**  
Centralizes all necessary data for ECL calculation, including PD, LGD, EAD, and macroeconomic overlays, into a single structure for processing.

---


## Generate ECL Default Rule

> **Function**  
Creates baseline assumptions for default conditions used in ECL workflows, aligning with internal policy or regulatory guidance.

---


## Update Stage and SICR Criteria

> **Function**  
Applies updates to criteria for staging financial assets (Stage 1, 2, or 3) and determining Significant Increase in Credit Risk (SICR). This ensures that staging reflects evolving credit quality.

---


## Generate EAD Term Structure for Non-Revolving Product

> **Function**  
Calculates Exposure at Default (EAD) over time for term loans or fixed facilities.

---

## Generate EAD Term Structure for Revolving Product

> **Function**  
Calculates Exposure at Default (EAD) over time for credit cards or lines of credit.

---


## Update Impairment Result to IMA Monthly

> **Function**  
Saves the final calculated impairment results to the monthly IMA repository, enabling auditability and future comparisons.

---

## Calculate ECL

> **Function**  
Executes the complete Expected Credit Loss calculation based on PD, LGD, EAD, discounting, and scenario weighting. Outputs are used in financial provisioning.

---



## Stop Process Workflow

> **Function**  
Halts the workflow at a specific point. This may be used for debugging, review stages, or compliance checkpoint validation.

---


## Initial Update

> **Function**  
Ingests and updates key client data such as overdue information, internal credit grades, and external credit ratings—crucial for risk assessments and staging.

---


## Decision Process - Populate IMA Previous & Current

> **Function**  
Implements logic to determine whether to populate previous and current IMA data based on defined criteria, supporting decision-based branching in workflows.

---


