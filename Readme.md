# Airline Passenger Satisfaction — Data Analysis

## Overview

This project analyzes airline passenger survey data (~130,000 responses) to understand what
factors drive passenger satisfaction, and to test whether satisfaction can be predicted reliably
from passenger and service data.

## Research Question

Which passenger and service factors most strongly predict whether a passenger is satisfied or
dissatisfied, and can this be predicted reliably enough to act on?

## Why This Matters

Airlines collect satisfaction survey data but often analyze it only after the fact. This project
turns that data into a predictive tool: given a passenger's profile and service ratings, it
estimates their likely satisfaction — helping identify which service areas most affect retention.

## Dataset

- Source: airline passenger satisfaction survey data (`airline_passenger_satisfaction.csv`)
- ~129,880 rows, 24 columns: demographics, trip details, service ratings (0–5 scale), and the
  target variable `Satisfaction` (Satisfied / Neutral or Dissatisfied)

## Methodology

1. **Data cleaning** — filled missing Arrival Delay values (393 rows) using the median, since the
   column has extreme outliers that would skew the mean.
2. **Exploratory data analysis** — inspected shape, dtypes, duplicates, target balance, and
   distributions across key variables (Age, Class, Customer Type, Type of Travel).
3. **Visualization** — histograms, bar charts, boxplots, and a correlation heatmap to surface
   relationships between features and satisfaction.
4. **Statistical testing** —
   - Chi-square test confirming a significant relationship between Class and Satisfaction
     (χ² ≈ 32,906, p < 0.001)
   - Independent t-test confirming satisfied passengers are, on average, significantly older
     than dissatisfied passengers (t ≈ 48.76, p < 0.001)
5. **Modeling** — trained and compared six classifiers to predict Satisfaction from passenger and
   service features: Random Forest, XGBoost, AdaBoost, Logistic Regression, KNN, and SVC.

## Results

| Model               | Accuracy | Precision | Recall |
| ------------------- | -------- | --------- | ------ |
| XGBoost             | 96.4%    | 97.1%     | 94.5%  |
| Random Forest       | 96.3%    | 97.1%     | 94.1%  |
| AdaBoost            | 92.3%    | 92.0%     | 90.0%  |
| Logistic Regression | 87.4%    | 86.7%     | 83.8%  |
| KNN                 | 74.7%    | 76.2%     | 60.6%  |
| SVC                 | 59.8%    | 75.9%     | 10.5%  |

XGBoost and Random Forest substantially outperform the ~57% baseline of guessing the majority
class, confirming satisfaction can be predicted reliably. Tree-based ensembles clearly outperform
distance-based methods (KNN, SVC), which are sensitive to unscaled features.

## Key Findings

- Business class passengers are mostly satisfied; Economy passengers are overwhelmingly
  dissatisfied — Class is one of the strongest drivers of satisfaction.
- Older, returning ("loyal") customers tend to be more satisfied than younger, first-time
  travelers.
- Departure/Arrival Delay shows a weaker relationship with satisfaction than service-quality
  factors.
- Model choice matters: tree-based ensembles (XGBoost, Random Forest, AdaBoost) handle this
  dataset's mixed feature scales far better than distance-based models (KNN, SVC).

## How to Run

Set up the environment:

    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt

Run the analysis notebook:

    jupyter lab

Run the interactive prediction app:

    streamlit run app.py

## Reflection

- **What was easy:** exploratory analysis and visualization, since the dataset was already clean
  and well-structured.
- **What was challenging:** handling encoded/text columns consistently across cleaning,
  visualization, and modeling steps without breaking earlier cells.

## Next Steps

- Tune XGBoost hyperparameters for further gains beyond the current 96.4% accuracy.
- Apply feature scaling improvements to boost KNN and SVC performance.
- Wrap the trained model in a small interactive app so a user can input passenger details and get
  a live satisfaction prediction. *(done — see `app.py`)*
- Publish the project via GitHub Pages for a public-facing summary. *(done)*
