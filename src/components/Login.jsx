import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://backenddata-4.onrender.com/admin/login",
        { email, password },
        { withCredentials: true } 
      );

      const token = res.data.accessToken;

      if (!token) {
        setMessage("Token not received");
        return;
      }

      localStorage.setItem("token", token);

      const payload = JSON.parse(atob(token.split(".")[1]));
      const role = payload.role;

      if (role === "admin") navigate("/admin");
      else if (role === "trainer") navigate("/trainer");
      else if (role === "student") navigate("/student");
      else setMessage("Invalid role");

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  /* ================= FORGOT PASSWORD ================= */
  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Enter your email to reset password");
      return;
    }

    try {
      const res = await axios.post(
        "https://backenddata-4.onrender.com/student/forget-password",
        { email },
        { withCredentials: true } 
      );

      setMessage(res.data.message || "Reset link sent");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2>{showForgot ? "Forgot Password" : "Login"}</h2>

        <form onSubmit={showForgot ? handleForgotPassword : handleLogin}>
          {/* Email */}
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          {!showForgot && (
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  className="eye"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="eye"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : showForgot
              ? "Send Reset Link"
              : "Login"}
          </button>
        </form>

        {!showForgot ? (
          <p className="link" onClick={() => setShowForgot(true)}>
            Forgot Password?
          </p>
        ) : (
          <p className="link" onClick={() => setShowForgot(false)}>
            Back to Login
          </p>
        )}

        {message && (
          <p
            className={
              message.toLowerCase().includes("invalid") ||
              message.toLowerCase().includes("error") ||
              message.toLowerCase().includes("fill")
                ? "error"
                : "success"
            }
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
