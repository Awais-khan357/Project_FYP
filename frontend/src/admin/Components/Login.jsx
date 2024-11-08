import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="container-fluid bg-dark vh-100">
      <div className="row justify-content-md-center">
        <div className="col-md-4 p-4 backs">
          <form className="login" onSubmit={handleSubmit}>
            <h3 className="text-center fw-bold">Sign In</h3>
            <div className="mb-3">
              <label className="fw-bold">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right text-decoration-underline">
              <Link to="/registration">Don't have an account?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
