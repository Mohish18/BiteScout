**BiteScout — Restaurant Recommendation System**
BiteScout is a full-stack web app recommending top-rated restaurants based on location and restaurant type. It uses a cleaned Zomato dataset for suggestions via a simple interface.

**Features**

Input location and restaurant type (e.g., Cafe, Casual Dining)

Shows top 5 restaurants by rating and votes

Links to official websites (if available)

Responsive React frontend with themed background

Flask backend handles recommendation logic

**Tech Stack**
Frontend: React.js, HTML, CSS
Backend: Python (Flask), Pandas
Others: REST API, Flask-CORS

**Dataset**
Source: Zomato CSV data
Columns used: name, location, type, rate, votes, url

**Installation**

Prerequisites: Node.js, npm, Python 3

**Backend:**

pip install flask pandas flask-cors  
python app.py  

**Frontend:**

npm install  
npm start  

**Usage**

Run Flask backend (http://localhost:5000)

Run React frontend (http://localhost:3000)

Enter location and restaurant type, click Search

View top recommendations with details

**Future Improvements**

Deploy online (Render, Vercel, Replit)

Add filters (cost, delivery, cuisine)

Add charts (Plotly, Chart.js)

Add user feedback system

**License**
Open-source for educational and non-commercial use

