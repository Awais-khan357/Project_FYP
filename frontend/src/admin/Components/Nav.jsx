import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Nav({ Toggle }) {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setIsAuthenticated(false);
        navigate("/admin/login");
      }
    } catch (err) {
      // Check if the error is due to the cookie already being removed
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Even if we get an auth error, we should still logout the user
        setIsAuthenticated(false);
        navigate("/admin/login");
      } else {
        console.error("Logout failed:", err);
        alert("Logout success");
        navigate("/admin/login");
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {" "}
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <span
              className="nav-link text-white bg-warning rounded"
              style={{ cursor: "pointer" }}
              id="dropdownId"
              onClick={handleLogout}
            >
              LogOut
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
