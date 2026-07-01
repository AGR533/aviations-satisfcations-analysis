import streamlit as st
import pandas as pd
import joblib
import plotly.express as px

model = joblib.load("satisfaction_model.pkl")
model_columns = joblib.load("model_columns.pkl")

st.set_page_config(page_title="Airline Passenger Satisfaction Predictor", page_icon="✈️", layout="wide")

st.title("✈️ Airline Passenger Satisfaction Predictor")
st.write(
    "Enter a passenger's profile and service ratings below to predict whether "
    "they are likely to be satisfied or dissatisfied with their flight."
)

st.divider()

# --- Prediction tool ---
st.subheader("🧑‍✈️ Passenger Profile")
col1, col2 = st.columns(2)
with col1:
    gender = st.selectbox("Gender", ["Male", "Female"])
    customer_type = st.selectbox("Customer Type", ["Returning", "First-time"])
    age = st.slider("Age", 7, 85, 35)
with col2:
    travel_type = st.selectbox("Type of Travel", ["Business", "Personal"])
    travel_class = st.selectbox("Class", ["Business", "Economy", "Economy Plus"])
    flight_distance = st.slider("Flight Distance (miles)", 31, 4983, 1000)

st.subheader("🕓 Trip Details")
col3, col4 = st.columns(2)
with col3:
    departure_delay = st.slider("Departure Delay (minutes)", 0, 1592, 0)
with col4:
    arrival_delay = st.slider("Arrival Delay (minutes)", 0, 1584, 0)

rating_cols = [
    "Departure and Arrival Time Convenience", "Ease of Online Booking",
    "Check-in Service", "Online Boarding", "Gate Location", "On-board Service",
    "Seat Comfort", "Leg Room Service", "Cleanliness", "Food and Drink",
    "In-flight Service", "In-flight Wifi Service", "In-flight Entertainment",
    "Baggage Handling",
]

st.subheader("⭐ Service Ratings (0 = worst, 5 = best)")
ratings = {}
cols = st.columns(2)
for i, rating_name in enumerate(rating_cols):
    with cols[i % 2]:
        ratings[rating_name] = st.slider(rating_name, 0, 5, 3)

if st.button("Predict Satisfaction", type="primary", use_container_width=True):
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

    if prediction == 1:
        st.success(f"Predicted: **Satisfied** (confidence: {probability:.1%})")
    else:
        st.error(f"Predicted: **Neutral or Dissatisfied** (confidence: {1 - probability:.1%})")

st.divider()

# --- Model comparison: donut chart ---
st.subheader("🏆 Which Model Works Best?")
st.write(
    "We tested 6 prediction methods. Each slice below represents a model's "
    "accuracy — the percentage of passengers it correctly classified."
)

comparison_data = pd.DataFrame({
    "Model": ["XGBoost", "Random Forest", "AdaBoost", "Logistic Regression", "KNN", "SVC"],
    "Accuracy": [96.4, 96.3, 92.3, 87.4, 74.7, 59.8],
})

fig = px.pie(
    comparison_data, names="Model", values="Accuracy", hole=0.5,
    color_discrete_sequence=px.colors.sequential.Blues_r,
)
fig.update_traces(textinfo="percent", textposition="inside", textfont_size=12)
fig.update_layout(
    showlegend=True,
    legend=dict(orientation="h", yanchor="bottom", y=-0.2, xanchor="center", x=0.5),
    margin=dict(t=10, b=10, l=10, r=10),
)
st.plotly_chart(fig, use_container_width=True)
st.caption("XGBoost scored highest (96.4% accuracy) and is the model powering the prediction above.")

st.divider()

# --- Rating gaps ---
st.subheader("📉 Where Are Passengers Most Dissatisfied?")
st.write(
    "Comparing average ratings from Satisfied vs. Dissatisfied passengers across "
    "each service area. Bigger gaps suggest bigger impact on satisfaction."
)

raw_data = pd.read_csv("airline_passenger_satisfaction.csv")
raw_data["Arrival Delay"] = raw_data["Arrival Delay"].fillna(raw_data["Arrival Delay"].median())

gap_data = []
for col in rating_cols:
    sat_avg = raw_data[raw_data["Satisfaction"] == "Satisfied"][col].mean()
    dissat_avg = raw_data[raw_data["Satisfaction"] == "Neutral or Dissatisfied"][col].mean()
    gap_data.append({"Service Area": col, "Gap": sat_avg - dissat_avg})

gap_df = pd.DataFrame(gap_data).sort_values("Gap", ascending=True)

fig2 = px.bar(
    gap_df, x="Gap", y="Service Area", orientation="h",
    color="Gap", color_continuous_scale="Oranges", text="Gap",
)
fig2.update_traces(texttemplate="%{text:.2f}", textposition="outside")
fig2.update_layout(coloraxis_showscale=False, xaxis_title="Rating Gap (Satisfied − Dissatisfied)", yaxis_title="")
st.plotly_chart(fig2, use_container_width=True)
st.caption("The largest gaps highlight where service improvements would most affect satisfaction.")

st.divider()

# --- Feature importance ---
st.subheader("🔍 What Drives the Prediction?")
st.write(
    "This shows which factors the model relies on most when predicting satisfaction — "
    "the longer the bar, the more that feature influences the result."
)

importance_df = pd.DataFrame({
    "Feature": model_columns,
    "Importance": model.feature_importances_,
}).sort_values("Importance", ascending=True).tail(10)

fig3 = px.bar(
    importance_df, x="Importance", y="Feature", orientation="h",
    color="Importance", color_continuous_scale="Teal",
)
fig3.update_layout(coloraxis_showscale=False, xaxis_title="Relative Importance", yaxis_title="")
st.plotly_chart(fig3, use_container_width=True)
st.caption("Top 10 most influential factors according to the trained XGBoost model.")

st.divider()

# --- Recommended actions ---
st.subheader("💡 Recommended Actions")
st.write("Based on the top drivers above, here's what an airline could act on:")

recommendations = {
    "Online Boarding": "Simplify and speed up the boarding process — this is consistently one of the strongest satisfaction drivers.",
    "In-flight Wifi Service": "Invest in wifi reliability/speed — a common pain point that strongly separates satisfied vs. dissatisfied passengers.",
    "Seat Comfort": "Prioritize seat upgrades or cushioning improvements, especially in Economy.",
    "Ease of Online Booking": "Streamline the booking website/app — friction here affects the whole trip perception.",
    "Check-in Service": "Reduce check-in wait times and staff friction points.",
    "Class_Economy": "Consider targeted service improvements for Economy passengers specifically, since Class is one of the strongest satisfaction predictors.",
    "In-flight Entertainment": "Expand or modernize entertainment options to improve perceived trip quality.",
    "Cleanliness": "Increase cleaning frequency/standards, a visible and easily-noticed factor.",
    "Baggage Handling": "Reduce mishandling/delay rates for checked baggage.",
    "On-board Service": "Invest in crew training and responsiveness during the flight.",
}

top_features = importance_df.sort_values("Importance", ascending=False)["Feature"].tolist()
shown = 0
for feature in top_features:
    if feature in recommendations:
        st.write(f"**{feature}:** {recommendations[feature]}")
        shown += 1
    if shown == 5:
        break