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
5. **Modeling** — trained a Random Forest classifier to predict Satisfaction from passenger and
   service features.

## Results
The Random Forest model achieved:
- **Accuracy:** 96.3%
- **Precision:** 97.1%
- **Recall:** 94.1%

This substantially outperforms the ~57% baseline of simply guessing the majority class,
confirming that satisfaction can be predicted reliably from the available data.

## Key Findings
- Business class passengers are mostly satisfied; Economy passengers are overwhelmingly
  dissatisfied — Class is one of the strongest drivers of satisfaction.
- Older, returning ("loyal") customers tend to be more satisfied than younger, first-time
  travelers.
- Departure/Arrival Delay shows a weaker relationship with satisfaction than service-quality
  factors.

## How to Run
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
jupyter lab
```
Then open `airline-passenger-satisfaction-part-1.ipynb` (or the main analysis notebook) and run
all cells.

## Reflection
- **What was easy:** exploratory analysis and visualization, since the dataset was already clean
  and well-structured.
- **What was challenging:** handling encoded/text columns consistently across cleaning,
  visualization, and modeling steps without breaking earlier cells.

## Next Steps
- Expand the model comparison (e.g. logistic regression, gradient boosting) and tune
  hyperparameters.
- Wrap the trained model in a small interactive app so a user can input passenger details and get
  a live satisfaction prediction.
- Publish the project via GitHub Pages for a public-facing summary.
