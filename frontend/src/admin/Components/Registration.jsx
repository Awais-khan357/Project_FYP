import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/admin/login");
        } else {
          alert("Error during Registring");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="container-fluid bg-dark vh-100">
      <div className="row justify-content-md-center">
        <div className="col-md-4 p-4 backs">
          <form className="Registration" onSubmit={handleSubmit}>
            <h3 className="text-center fw-bold">Sign Up</h3>
            <div className="mb-3">
              <label className="fw-bold">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="fw-bold">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right text-decoration-underline">
              <Link to="/Login">Already have account?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
