import { Link } from "react-router-dom";
import "./Login.css";

const handleLoginSubmit = (e) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);
  const body = {};
  if (!form.get("email") || !form.get("password")) {
    console.log("Fill; out spaces");
  } else {
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    // i will post it to the api
    console.log(body);
  }
};

function Login() {
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
        </form>
      </div>
    </div>
  );
}

export default Login;
