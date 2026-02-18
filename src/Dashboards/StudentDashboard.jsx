import React from "react";
import "./student.css";
import UploadPhoto from "../components/Uploadphoto";

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>

      <div className="student-content">

        {/* LEFT SIDE */}
        <div className="student-left">
          <ul className="student-menu">
            <li>Attendance</li>
            <li>Weekly Exams</li>
            <li>Results</li>
            <li>Curriculum</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="student-right">
          <div className="upload-box">
            <UploadPhoto />
          </div>
        </div>

      </div>
    </div>
  );
}

export default StudentDashboard;
