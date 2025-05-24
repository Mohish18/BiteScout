**BiteScout — Restaurant Recommendation System**


BiteScout is a full-stack web application that recommends top-rated restaurants based on user-selected location and restaurant type. It uses a cleaned Zomato dataset to provide intelligent suggestions through a simple and responsive interface.


**Features**


•	Input fields for location and restaurant type (e.g., Cafe, Casual Dining)

•	Displays top 5 restaurants based on rating and number of votes

•	Provides links to official restaurant websites (if available)

•	Responsive React frontend with a themed background

•	Flask backend handles the recommendation logic


**Tech Stack**
•	Frontend: React.js, HTML, CSS
•	Backend: Python (Flask), Pandas
•	Others: REST API, Flask-CORS


**Dataset**
•	Source: Zomato CSV data
•	Columns used: name, location, type, rate, votes, url


**Installation**

**Prerequisites:**

•	Node.js and npm (for React frontend)

•	Python 3 (for Flask backend)


**Backend Setup (Python + Flask):**

1.	Open terminal or command prompt

2.	Navigate to the folder:
cd foldername

3.	Install required Python packages:
pip install flask pandas flask-cors

4.	Run the backend server:
python app.py

**Frontend Setup (React):**

1.	Open a new terminal or command prompt

2.	Navigate to the folder:
cd foldername

3.	Install required npm packages:
npm install

4.	Start the React development server:
npm start

**Usage**

1.	Run Flask backend at http://localhost:5000

2.	Run React frontend at http://localhost:3000

3.	Enter location and restaurant type, then click Search

4.	View top restaurant recommendations with details and website links

**Future Improvements**

•	Deploy the app online using services like Render, Vercel, or Replit

•	Add additional filters such as cost, delivery options, and cuisines

•	Include charts and visualizations using Plotly or Chart.js

•	Implement a user feedback and rating system

**License**

This project is open-source and intended for educational and non-commercial use.

