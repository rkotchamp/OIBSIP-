import { useState } from "react";
import { Link } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  // Hooks
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  // methods
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const body = {};
    const form = new FormData(e.currentTarget);
    // console.log(form);

    if (!form.get("fullName") || !form.get("email") || !form.get("password")) {
      return setSignUpError("Make sure to fill out all spaces speedy man");
    } else {
      for (const [key, value] of form.entries()) {
        body[key] = value;
      }
      api
        .post("/register", body)
        .then((res) => {
          if (res) {
            navigate("/");
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data.error);
          }
        });
    }
  };

  return (
    <div className="signUp__container">
      <div className="grading one__gradient"></div>
      <div className="grading two__gradient"></div>
      <div className="form_container">
        <h1>Create Account</h1>
        <form action="" className="signForm" onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="signInput"
            name="fullName"
          />
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
              Already have an account?
              <Link to="/login">
                <span className="signRoutes">Login</span>
              </Link>
            </p>
            <Link to="/forgot">
              <p className="signRoutes">Forgot Password?</p>
            </Link>
          </div>
          <button className="signBTN">Register</button>
        </form>
      </div>
      <Link to="/admin-login">
        <div className="adminIcon">
          <MdAdminPanelSettings /> <p>Admin</p>
        </div>
      </Link>
    </div>
  );
}

export default SignUp;
