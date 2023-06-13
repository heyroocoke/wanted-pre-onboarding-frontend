import React from "react";
import { styled } from "styled-components";

const SignIn = () => {
  const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <LoginContainer>
      <h2>로그인</h2>
      <div>
        <label htmlFor="input_id">이메일 : </label>
        <input type="text" name="input_id" data-testid="email-input" />
      </div>
      <div>
        <label htmlFor="input_pw">패스워드 : </label>
        <input type="password" name="input_pw" data-testid="password-input" />
      </div>
      <div>
        <button type="button" data-testid="signin-button">
          로그인
        </button>
      </div>
    </LoginContainer>
  );
};

export default SignIn;
