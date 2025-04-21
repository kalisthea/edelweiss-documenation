---
title: Risk Modeling Steps
sidebar_position: 1
---

# Risk Modeling Steps
> **Description**  
Provides in-depth explanation of each steps from data preprocessing to forward looking in Risk Modeling.
---

## Data Preprocessing
> **Purpose**  
This step processes historical Observed Default Rate (ODR) and Macroeconomic Variables (MEV) to be used for model training and forecasting.

:::info 

Data is sourced from internal banking records and external macroeconomic indicators.

:::

---

### Data Cleansing
> **Purpose**  
Data cleansing is done to improve dataset to enhance model performance.

- Example of data cleansing:
    - Eliminating extreme and error values (more than 15 digits).
    - Interpolating missing values.

---

### Data Transformation
> **Purpose**  
Data transformation is done to solve linearity and stationarity problem and expanding features to add more combinations leading to a more accurate models.


#### Transformations Types

- **Lags of Variable (Lag)**

- **Inverse (inv)**

$$
\text{Inv } n = \frac{1}{n}
$$

- **Exponent (e)**

$$
\text{E } n = e^n
$$

- **Square Root (sqrt)**

$$
\text{Sqrt } n = \sqrt{n}
$$

- **Natural Log (ln)**

$$
\text{Ln } n = \ln n
$$

- **Difference (diff)**

$$
\text{diff}_a\, n = n_t - n_{t-a}
$$

- **Growth (qgrw)**

$$
\text{qgrw}_a\, n = \left( \frac{n_t}{n_{t-a}} \right) - 1
$$

---

## Variable Selection
> **Purpose**  
 Variable selection is done to further analyze and choose the most relevant features/variables in building a predictive model

---

### Stationarity Test 
> **Overview**  
Stationarity test is done to determine whether a time series data has statistical properties that remain constant over time. It will check if the data behaves consistently without any trends or seasonality.

📌 **Augmented Dickey-Fuller (DF-Test)**
- Comparing t-value from Ordinary Least Square Method with DF critical value.
- Pass condition : t-value < critical value.

---

#### Purpose of Stationarity Test
- To prevent spurious regression.
- Regression from an unstationary variable can cause high r-squared value even though correlation between dependent and independent value is insignificant.

#### Conditions of Stationarity Test
- Stationarity tests are conducted on both dependent and independent variables. When a dependent variable is non-stationary, we apply the differencing method. If the differenced variable still fails the stationarity test, the Bank may proceed with modeling using this differenced variable. This approach is valid because differencing typically produces variables that are more stationary than their original form.
- Banks may choose not to test the dependent variable's stationarity statistically if they determine that the variable is clearly non-stationary based on its trend (showing consistent rises, falls, or high volatility) or is unrelated to macroeconomic factors. This assessment should be based on the reasonable analysis of the variable's historical trend. Banks must maintain proper documentation, memos, or explanations to support their decision to skip the stationarity test.
- In the event that the Bank assesses that the dependent variable is not stationary (as in point 2 above) or not reasonable to model, Banks can choose to use historical figures without forward-looking adjustments (for PD or LGD).

---

### Selection Method
#### Single Factor Analysis (SFA)
📌 **Eliminating MEV based on three conditions:**
- Correlation
    - Variable correlation lower than 0.5 will be eliminated.
- Expected Trend
    - Variables with a correlation direction (negative or positive) opposite to the expected trend will be eliminated.
- Stationarity
    - Eliminate variables that did not pass the Augmented Dickey-Fuller Test.

#### Grouping/Clustering
📌 **Grouping:**
- Grouping MEV variables that passed SFA based on (n) MEV groups.
- Choosing variables with the best correlation from SFA output from each MEV groups.
    - **Maximum 50 variables chosen in total.**
        (Example 7 MEV groups)
        - If all 7 groups have variables that passed SFA, choose 7 variables from each group.
        - If less than 5 groups, choose 10 variables from each group.
- Create combination of models with maximum 3 variables from different MEV groups.


📌 **Clustering:**
- Create combination of models according to sum of clusters. Some models will have combinations of variables from different cluster group.


📌 **MEV Combination:**
- In one regression function, coefficients must not use any transformation of the same variable.

---

#### MEV Elimination
📌 **Eliminating combined MEV based on three criteria:**

- Multicollinearity
    - Threshold of multicollinearity strength is 4. Therefore variables with **Variance Inflation Factor (VIF) value greater than 4 will be eliminated.**
- P-Value
    - The aplha level used is 0.05. Therefore, variables with **p-values greater than 0.05 will be eliminated.**
- MEV Group
    - Choosing MEV with the lowest p-value among MEV from the same group

---

## Model Training
> **Purpose**  
This step trains model in order to gain evaluation whether the model is accurate in prediction.

---

### In-sample and Out-sample

- Models are trained with **in-sample data**
- **Out-sample data** is used to measure whether model performace based on historical data is consistent with the performance to data outside the historical data
- **Best practice**
    - Out of sample data (6 > month > 12)
    - In sample data ~ 8 years

---

## Model Selection and Validation (Regression)

### Model Filtering

### Rank Model

### Model Choosing
