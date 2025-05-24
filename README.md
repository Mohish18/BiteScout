BiteScout — Restaurant Recommendation System
BiteScout is a full-stack web application that recommends top-rated restaurants to users based on their chosen location and restaurant type. The application uses a cleaned and preprocessed dataset from Zomato to deliver intelligent restaurant suggestions through a user-friendly interface.

Features
Input fields for users to enter:

Preferred location

Desired restaurant type (e.g., Cafe, Casual Dining, Quick Bites)

Displays top 5 restaurant recommendations based on rating and vote count

Provides links to the restaurant's official website (if available)

React-based responsive user interface with a themed background image

Flask API backend to handle recommendation logic

Tech Stack
Frontend: React.js, HTML, CSS

Backend: Python (Flask), Pandas

Others: REST API, Flask-CORS

Dataset
Source: Zomato restaurant data (CSV format)

Columns used: name, location, type, rate, votes, url

Installation
Prerequisites
Node.js and npm

Python 3

Backend Setup
bash
Copy
Edit
cd backend
pip install flask pandas flask-cors
python app.py
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Usage
Launch the Flask backend (http://localhost:5000)

Start the React frontend (http://localhost:3000)

Enter a location and restaurant type, then click Search

View top matching restaurants with details and website links

Future Improvements
Deploy the application online (using Render, Vercel, or Replit)

Add filters for average cost, delivery options, and cuisines

Include charts for data visualization (e.g., Plotly or Chart.js)

Add a feedback or rating system for users

License
This project is open-source and available for educational and non-commercial use.
