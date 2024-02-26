import { Link } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp__container">
      <div className="grading one__gradient"></div>
      <div className="grading two__gradient"></div>
      <div className="form_container">
        <h1>Create Account</h1>
        <form action="" className="signForm">
          <input type="text" placeholder="Full Name" className="signInput" />
          <input type="email" placeholder="Email" className="signInput" />
          <input type="password" placeholder="Password" className="signInput" />
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
