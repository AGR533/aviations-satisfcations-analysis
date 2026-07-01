import streamlit as st
import pandas as pd
import joblib
import plotly.express as px

model = joblib.load("satisfaction_model.pkl")
model_columns = joblib.load("model_columns.pkl")

st.set_page_config(page_title="Airline Passenger Satisfaction Predictor", page_icon="✈️")

st.title("Airline Passenger Satisfaction Predictor")
st.write(
    "Enter a passenger's profile and service ratings to predict whether "
    "they are likely to be satisfied or dissatisfied with their flight."
)

# --- Model comparison ---
st.header("Which Model Predicts Best?")
st.write(
    "We tested 6 different prediction methods to see which one best guesses "
    "whether a passenger will be satisfied. **Accuracy** means: out of 100 "
    "passengers, how many did the model correctly predict?"
)

comparison_data = pd.DataFrame({
    "Model": ["XGBoost", "Random Forest", "AdaBoost", "Logistic Regression", "KNN", "SVC"],
    "Accuracy": [96.4, 96.3, 92.3, 87.4, 74.7, 59.8],
})
comparison_data = comparison_data.sort_values("Accuracy", ascending=True)

fig = px.bar(
    comparison_data, x="Accuracy", y="Model", orientation="h",
    text="Accuracy", color="Accuracy", color_continuous_scale="Blues",
    range_x=[0, 100],
)
fig.update_traces(texttemplate="%{text}%", textposition="outside")
fig.update_layout(coloraxis_showscale=False, xaxis_title="Accuracy (%)", yaxis_title="")
st.plotly_chart(fig, use_container_width=True)
st.caption("XGBoost scored highest (96.4%) and is the model powering the prediction tool below.")

st.divider()

# --- Rating gap: where are passengers most dissatisfied ---
rating_cols = [
    "Departure and Arrival Time Convenience", "Ease of Online Booking",
    "Check-in Service", "Online Boarding", "Gate Location", "On-board Service",
    "Seat Comfort", "Leg Room Service", "Cleanliness", "Food and Drink",
    "In-flight Service", "In-flight Wifi Service", "In-flight Entertainment",
    "Baggage Handling",
]

st.header("Where Are Passengers Most Dissatisfied?")
st.write(
    "This compares average ratings given by Satisfied vs. Dissatisfied passengers "
    "across each service area. The bigger the gap, the more that factor seems to "
    "matter for satisfaction."
)

raw_data = pd.read_csv("airline_passenger_satisfaction.csv")
raw_data["Arrival Delay"] = raw_data["Arrival Delay"].fillna(raw_data["Arrival Delay"].median())

gap_data = []
for col in rating_cols:
    sat_avg = raw_data[raw_data["Satisfaction"] == "Satisfied"][col].mean()
    dissat_avg = raw_data[raw_data["Satisfaction"] == "Neutral or Dissatisfied"][col].mean()
    gap_data.append({"Service Area": col, "Satisfied": sat_avg, "Dissatisfied": dissat_avg})

gap_df = pd.DataFrame(gap_data)
gap_df["Gap"] = gap_df["Satisfied"] - gap_df["Dissatisfied"]
gap_df = gap_df.sort_values("Gap", ascending=True)

fig2 = px.bar(
    gap_df, x="Gap", y="Service Area", orientation="h",
    color="Gap", color_continuous_scale="Oranges", text="Gap",
)
fig2.update_traces(texttemplate="%{text:.2f}", textposition="outside")
fig2.update_layout(coloraxis_showscale=False, xaxis_title="Rating Gap (Satisfied − Dissatisfied)", yaxis_title="")
st.plotly_chart(fig2, use_container_width=True)
st.caption("The largest gaps highlight where service improvements would most affect satisfaction.")

st.divider()

# --- Prediction tool ---
st.header("Passenger Profile")
col1, col2 = st.columns(2)
with col1:
    gender = st.selectbox("Gender", ["Male", "Female"])
    customer_type = st.selectbox("Customer Type", ["Returning", "First-time"])
    age = st.slider("Age", 7, 85, 35)
with col2:
    travel_type = st.selectbox("Type of Travel", ["Business", "Personal"])
    travel_class = st.selectbox("Class", ["Business", "Economy", "Economy Plus"])
    flight_distance = st.slider("Flight Distance (miles)", 31, 4983, 1000)

st.header("Trip Details")
col3, col4 = st.columns(2)
with col3:
    departure_delay = st.slider("Departure Delay (minutes)", 0, 1592, 0)
with col4:
    arrival_delay = st.slider("Arrival Delay (minutes)", 0, 1584, 0)

st.header("Service Ratings (0 = worst, 5 = best)")
ratings = {}
cols = st.columns(2)
for i, rating_name in enumerate(rating_cols):
    with cols[i % 2]:
        ratings[rating_name] = st.slider(rating_name, 0, 5, 3)

if st.button("Predict Satisfaction", type="primary"):
    raw_input = {
        "Age": age, "Flight Distance": flight_distance,
        "Departure Delay": departure_delay, "Arrival Delay": arrival_delay,
        **ratings,
        "Gender": gender, "Customer Type": customer_type,
        "Type of Travel": travel_type, "Class": travel_class,
    }
    input_df = pd.DataFrame([raw_input])
    input_encoded = pd.get_dummies(
        input_df, columns=["Gender", "Customer Type", "Type of Travel", "Class"], drop_first=True
    )
    input_aligned = input_encoded.reindex(columns=model_columns, fill_value=0)

    prediction = model.predict(input_aligned)[0]
    probability = model.predict_proba(input_aligned)[0][1]

    st.divider()
    if prediction == 1:
        st.success(f"Predicted: **Satisfied** (confidence: {probability:.1%})")
    else:
        st.error(f"Predicted: **Neutral or Dissatisfied** (confidence: {1 - probability:.1%})")