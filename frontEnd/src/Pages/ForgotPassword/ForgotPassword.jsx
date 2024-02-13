import { Link } from "react-router-dom";

import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="signUp__container">
      <div className="grading one__gradient"></div>
      <div className="grading two__gradient"></div>
      <div className="form_container">
        <h1>Restore Account</h1>
        <form action="" className="signForm">
          <input type="email" placeholder="Email" className="signInput" />

          <div className="signNav">
            <p>
              Have access to account?
              <Link to="/login">
                <span className="signRoutes">Login</span>
              </Link>
            </p>
          </div>
          <button className="signBTN">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
