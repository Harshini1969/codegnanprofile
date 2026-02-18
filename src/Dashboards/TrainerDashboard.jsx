import React from "react";
import UploadPhoto from "../components/Uploadphoto";
import "./trainer.css";

function TrainerDashboard() {
  return (
    <div className="trainer-dashboard">
      
      {/* LEFT SIDE */}
      <div className="dashboard-left">
        <h2>Trainer Dashboard</h2>

        <ul>
          <li>Assigned Students</li>
          <li>Mark Attendance</li>
          <li>Add Exam Marks</li>
          <li>Update Curriculum</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="dashboard-right">
        <UploadPhoto />
      </div>

    </div>
  );
}

export default TrainerDashboard;

