import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  let username = "";

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      username = payload.name;
    } catch (err) {
      username = "";
    }
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <nav className="navbar">

               {/* Left */}
      <div className="nav-left">
        <h2 className="brand">CodeGnan Destination</h2>

               {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

                {/* Center */}
      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
         <Link to="">Contact</Link>
          <Link to="">About</Link>
      </div>

               {/* Right */}
      <div className="nav-right">
        {username && <span className="username">{username}</span>}
        {username && (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
