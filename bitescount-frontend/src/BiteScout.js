import React, { useState } from "react";

function BiteScout() {
  const [location, setLocation] = useState("");
  const [restType, setRestType] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    if (!location || !restType) {
      setMessage("Please fill in both fields.");
      setResults([]);
      return;
    }

    setMessage("Searching...");
    setResults([]);

    try {
      const response = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: location.trim(),
          rest_type: restType.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.length === 0) {
          setMessage("No restaurants found matching your criteria.");
          setResults([]);
        } else {
          setMessage("");
          setResults(data);
        }
      } else {
        setMessage(data.error || "Error fetching recommendations.");
        setResults([]);
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
      setResults([]);
    }
  };

  const backgroundStyle = {
    minHeight: "100vh",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    fontFamily: "Arial",
    color: "white",
    textShadow: "1px 1px 2px black",
  };

  const inputStyle = {
    marginLeft: 10,
    width: "60%",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff6347",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={backgroundStyle}>
      <div
        style={{
          maxWidth: 600,
          margin: "auto",
          padding: 20,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
        }}
      >
        <h2>BiteScout — Your Restaurant Recommender</h2>

        <div style={{ marginBottom: 10 }}>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Banashankari"
              style={inputStyle}
            />
          </label>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            Restaurant Type:
            <input
              type="text"
              value={restType}
              onChange={(e) => setRestType(e.target.value)}
              placeholder="e.g., Cafe, Casual Dining"
              style={inputStyle}
            />
          </label>
        </div>

        <button onClick={handleSearch} style={buttonStyle}>
          Search
        </button>

        {message && <p style={{ marginTop: 20 }}>{message}</p>}

        {results.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <h3>Top Restaurant Recommendations:</h3>
            <ul>
              {results.map((r, idx) => (
                <li key={idx} style={{ marginBottom: 15 }}>
                  <strong>{r.name}</strong> ({r.rest_type}) — Rating: {r.rate} | Votes: {r.votes}
                  <br />
                  Location: {r.location}
                  {r.url && (
                    <>
                      <br />
                      <a href={r.url} target="_blank" rel="noreferrer" style={{ color: "#ffcc00" }}>
                        Visit Website
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BiteScout;
