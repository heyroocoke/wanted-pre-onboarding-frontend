import React from "react";

const SignIn = () => {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">EMAIL : </label>
        <input type="text" name="input_id" data-testid="email-input" />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input type="password" name="input_pw" data-testid="password-input" />
      </div>
      <div>
        <button type="button" data-testid="signin-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
