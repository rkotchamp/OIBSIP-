import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import Cookies from "js-cookie";
import UserContext from "./../../Context/UserContext";
import "./Login.css";

function Login() {
  const [formError, setFormError] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {};
    if (!form.get("email") || !form.get("password")) {
      setErrorCheck(true);
      setFormError("Fill out spaces");
    } else {
      setErrorCheck(false);
      for (const [key, value] of form.entries()) {
        body[key] = value;
      }

      api.post("/login", body).then((response) => {
        if (response.status === 200) {
          Cookies.set("user_token", response.data.token);
          let config = {
            headers: {
              Authorization: "Bearer " + response.data.token,
            },
          };

          api.get("/user", config).then((res) => {
            setUser(res.data.data);
            navigate("/");
          });
        }
      });
    }
  };
  return (
    <div className="signUp__container">
      <div className="grading one__gradient"></div>
      <div className="grading two__gradient"></div>
      <div className="form_container">
        <h1>Login Account</h1>
        <form action="" className="signForm" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="signInput"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="signInput"
            name="password"
          />
          <div className="signNav">
            <p>
              Dont have an account?{" "}
              <Link to="/register">
                <span className="signRoutes">Register</span>
              </Link>
            </p>
            <Link to="/forgot">
              <p className="signRoutes">Forgot Password?</p>
            </Link>
          </div>
          <button className="signBTN">Login</button>
          {errorCheck && <p>{formError}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
