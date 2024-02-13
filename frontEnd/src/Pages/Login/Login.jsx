import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="signUp__container">
      <div className="grading one__gradient"></div>
      <div className="grading two__gradient"></div>
      <div className="form_container">
        <h1>Login Account</h1>
        <form action="" className="signForm">
          <input type="email" placeholder="Email" className="signInput" />
          <input type="password" placeholder="Password" className="signInput" />
          <div className="signNav">
            <p>
              Don't have an account?{" "}
              <Link to="/register">
                <span className="signRoutes">Register</span>
              </Link>
            </p>
            <Link to="/forgot">
              <p className="signRoutes">Forgot Password?</p>
            </Link>
          </div>
          <button className="signBTN">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
