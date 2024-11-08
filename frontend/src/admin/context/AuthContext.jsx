import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:4000/auth/protected", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        setIsAuthenticated(false);
        if (window.location.pathname !== "/admin/login") {
          navigate("/admin/login");
        }
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/auth/login",
        { email, password },
        { withCredentials: true } // Configuration object should be the third argument
      );

      if (res.status === 200) {
        setIsAuthenticated(true);
        navigate("/admin/");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert(
        err.response?.data?.message ||
          "Login failed! Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsAuthenticated(false);
      navigate("/admin/login");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
