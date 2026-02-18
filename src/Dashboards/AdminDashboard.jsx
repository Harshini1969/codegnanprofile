import "./admin.css";
import React, { useState } from "react";
import Register from "../components/Register";
import UploadPhoto from "../components/Uploadphoto";

function AdminDashboard() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-content">

        {/* LEFT SIDE */}
        <div className="left-section">

          <div className="card-container">
            <div className="card">
              <h3>Total Students</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>Total Trainers</h3>
              <p>8</p>
            </div>

            <div className="card">
              <h3>Courses</h3>
              <p>5</p>
            </div>
          </div>

          <div className="admin-actions">
            <h2>Admin Actions</h2>
            <ul>
              <li>Add Student / Trainer</li>
              <li>Assign Trainer to Student</li>
              <li>View Attendance Reports</li>
              <li>View Exam Results</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">
          <div className="right-box">

            <button
              onClick={() => setShowRegister(!showRegister)}
              className="register-btn"
            >
              {showRegister ? "Close Register" : "Register User"}
            </button>

            {showRegister && <Register />}

            <UploadPhoto />

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
