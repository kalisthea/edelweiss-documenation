# 💾 Data Explanation

## Overview
> This page provides explanation on **Observed Default Rate (ODR)** and **Macroeconomics Value (MEV)** data, how to use it to predict **Probability of Default (PD)**.
---

## Data Input
In predicting **Probability of Default (PD)**, we utilize two data inputs:
- **Observed Default Rate (ODR)**
    - Sourced from past data of default rate from different segments.
    - ODR value represents borrowers who defaulted within a specific period.

```python
# ODR Calculation Before Forward Looking
ODR = default / non-default
```

- Example of ODR segments:  SME, Corporate, Mortgage, etc.
    - Although ODR comes in many segments, use only one segment for each model.

    <div style={{textAlign: 'center'}}>
        <img src="/img/image.png" alt="Your Image" />
        
        **Probability of Default Historical Data from SME Segment in One Year**
    </div>

- **Macroeconomics Value (MEV)**
    - Sourced from BI or Bloomberg.
    - MEV have a significant impact on borrowers ability to repay their debts.
        - Example :  a recession can lead to widespread job losses and financial hardship, increasing default rates.
    - MEV variables can be a leading indicators of future default rates.
        - Example : a decline in GDP growth may signal an impending increase in defaults.
    - Examples of MEV variables : AVG_LEND_RATE, BI_RATE, INFLATION, GDP_Growth,  OIL_PRICE, etc.
---

## Data Type
The data type of given ODR and MEV is in **time series** and **recorded monthly**.

- **Data range:**
    - **Observed Default Rate (ODR):** 1 - 10 years.
    - **Macroeconomics Value (MEV):** more than 10 years / based on ODR time range.
---