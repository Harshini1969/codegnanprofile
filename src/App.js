import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPage from "./components/ResetPage";

import AdminDashboard from "./Dashboards/AdminDashboard";
import TrainerDashboard from "./Dashboards/TrainerDashboard";
import StudentDashboard from "./Dashboards/StudentDashboard";

import Navbar from "./components/Navbar";
import UploadPhoto from "./components/Uploadphoto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
           {/* Reset password page for both students and trainers */}

        <Route path="/reset/:role/:token" element={<ResetPage />} />

        {/* Admin Only  Register this page*/}
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/trainer" element={<TrainerDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/upload-photo" element={<UploadPhoto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
