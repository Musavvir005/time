import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">User Dashboard</h1>

        <div className="time-box">
          <p className="time-label">Current Time</p>
          <h2 className="time">{time.toLocaleTimeString()}</h2>
        </div>

        <form className="form">
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Gmail</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>

        <div className="preview">
          <h3>Live Preview</h3>
          <p><span>Name:</span> {username || "—"}</p>
          <p><span>Email:</span> {email || "—"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
