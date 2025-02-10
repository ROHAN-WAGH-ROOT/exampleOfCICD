import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({setIsAuthenticated}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainLoginContainer">
        <div className="loginContainer">
          <div className="loginTitle">Welcome</div>
          <div className="typography">
            Enter your username and password to continue.
          </div>
          <form
            className="formLogin"
            onSubmit={(e) => {
              e.preventDefault();
              const formdata = new FormData(e.target);
              const username = formdata.get("username");
              const password = formdata.get("password");
              if (username === "rohan" && password === "password") {
                localStorage.setItem("user", true);
                setIsAuthenticated(true);
                navigate("/dashboard");
              } else {
                alert("Please enter valid credentials");
                navigate("/");
              }
            }}
          >
            <div className="">
              <input
                className=""
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="">
              <input
                className=""
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div>
              <button className="subBtn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="img">
          <img
            className="actualImage"
            src="../../../public/kliton.jpg"
            alt="logo"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
