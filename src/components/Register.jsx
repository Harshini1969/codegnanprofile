import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin"); 
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMsg("You must be logged in as Admin");
      return;
    }

    axios
      .post(
        `https://backenddata-4.onrender.com/admin/register`,
        { name, email, password, role },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        alert("Successfully Registered");

        setName("");
        setEmail("");
        setPassword("");
        setRole("Admin");
        setMsg(res.data);
        setTimeout(() => setMsg(""), 3000);
      })
      .catch((err) => {
        setMsg(err.response?.data || "Registration failed");
      });
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Admin Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="trainer">Trainer</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {msg && <p style={{ marginTop: "10px" }}>{msg}</p>}
      </div>
    </div>
  );
}

export default Register;
