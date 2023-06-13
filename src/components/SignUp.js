import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const inputEmailHandle = (e) => {
    setEmail(e.target.value);
  };

  const inputPasswordHandle = (e) => {
    setPassword(e.target.value);
  };

  const signUpHandle = () => {
    axios
      .post("http://localhost:8000/auth/signup", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <label htmlFor="input_email">이메일 : </label>
        <input
          type="text"
          name="input_email"
          data-testid="email-input"
          value={email}
          onChange={inputEmailHandle}
        />
      </div>
      <div>
        <label htmlFor="input_pw">패스워드 : </label>
        <input
          type="password"
          name="input_pw"
          data-testid="password-input"
          value={password}
          onChange={inputPasswordHandle}
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="signup-button"
          onClick={signUpHandle}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
