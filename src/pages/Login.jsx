import React from "react";
import {
  FormContainer,
  SamllText,
  Title,
  FormWrapper,
  StyledInput,
  Logo,
  StyledButton,
  StyledImg,
} from "./styles";

const LogIn = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <Logo> Chat App</Logo>
        <Title>LogIn</Title>
        <form>
          <StyledInput
            type="email"
            placeholder="Enter your email"
          ></StyledInput>
          <StyledInput
            type="password"
            placeholder="Enter your password"
          ></StyledInput>
          <StyledButton>LogIn</StyledButton>
        </form>
        <SamllText>Still not a member? Register</SamllText>
      </FormWrapper>
    </FormContainer>
  );
};

export default LogIn;
