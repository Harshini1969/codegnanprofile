import axios from "axios";
import  { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPage() {
  const { role, token } = useParams(); 
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMessage("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      let res = await axios.post(
        `https://backenddata-4.onrender.com/${role}/reset-password/${token}`, 
        { password }
      );

      console.log("Password reset successful");
      setMessage(res.data.message || "Password reset successful");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      setMessage(
        err.response?.data?.message || "Invalid or expired token"
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{role?.toUpperCase()} Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {showPassword ? (
              <FaEyeSlash
                style={styles.eyeIcon}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                style={styles.eyeIcon}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
            {showConfirm ? (
              <FaEyeSlash
                style={styles.eyeIcon}
                onClick={() => setShowConfirm(false)}
              />
            ) : (
              <FaEye
                style={styles.eyeIcon}
                onClick={() => setShowConfirm(true)}
              />
            )}
          </div>

          <button type="submit" style={styles.button}>
            Reset Password
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    width: "350px",
    padding: "25px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  inputContainer: {
    position: "relative",
    margin: "15px 0",
  },
  input: {
    width: "100%",
    padding: "10px 40px 10px 40px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  icon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#888",
  },
  eyeIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#888",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    fontSize: "14px",
    color: "green",
  },
};

export default ResetPage;
