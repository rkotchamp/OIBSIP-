import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp__container">
      <div className="grading one__gradient"></div>
      <div className="grading two__gradient"></div>
      <div className="form_container">
        <h1>Create Account</h1>
        <form action="" className="signForm">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
