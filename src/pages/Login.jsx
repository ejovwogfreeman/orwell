import React, { useState } from "react";
import "../css/Login.css";
import ScrollToTop from "../components/ScrollToTop";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <ScrollToTop />
      <header style={{ height: "400px" }}>
        <p className="display-3">Login</p>
      </header>
      <div>
        <div className="login-cont">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-3">LOGIN HERE</h4>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL*"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="YOUR NAME*"
                required
              />
            </div>
            <button>LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
