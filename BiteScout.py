from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Load dataset and prepare
df = pd.read_csv("zomato.csv", encoding='utf-8')

df.rename(columns={
    'Name': 'name',
    'online_order': 'online_order',
    'book_table': 'book_table',
    'rate': 'rate',
    'votes': 'votes',
    'approx_cost(for two people)': 'approx_cost_for_two',
    'location': 'location',
    'url': 'url'  # Only if exists
}, inplace=True)

# Clean 'rate' column
df['rate'] = df['rate'].astype(str).str.replace('/5', '')
df['rate'] = pd.to_numeric(df['rate'], errors='coerce').fillna(0)

# Drop rows missing critical data
required_cols = ['name', 'rate', 'votes', 'rest_type', 'location']
df.dropna(subset=required_cols, inplace=True)
df.reset_index(drop=True, inplace=True)

def recommend_restaurants(rest_type_pref, location_pref):
    # Filter by location (case-insensitive)
    filtered = df[df['location'].str.contains(location_pref, case=False, na=False)]
    # Filter by restaurant type using correct column 'rest_type'
    filtered = filtered[filtered['rest_type'].str.contains(rest_type_pref, case=False, na=False)]

    # Sort by rating and votes descending
    filtered = filtered.sort_values(by=['rate', 'votes'], ascending=False)

    # Drop duplicates by name
    filtered = filtered.drop_duplicates(subset=['name'])

    # Return top 5 with URL if present
    if 'url' in filtered.columns:
        return filtered[['name', 'location', 'rest_type', 'rate', 'votes', 'url']].head(5)
    else:
        return filtered[['name', 'location', 'rest_type', 'rate', 'votes']].head(5)

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    location = data.get('location', '')
    rest_type = data.get('rest_type', '')

    recommendations = recommend_restaurants(rest_type, location)
    if recommendations.empty:
        return jsonify({"error": "Sorry, no restaurants found matching your criteria."})

    result = recommendations.to_dict(orient='records')
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
