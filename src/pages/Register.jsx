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

const Register = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <Logo> Chat App</Logo>
        <Title>Register</Title>
        <form>
          <StyledInput type="text" placeholder="Enter your name"></StyledInput>
          <StyledInput
            type="email"
            placeholder="Enter your email"
          ></StyledInput>
          <StyledInput
            type="password"
            placeholder="Enter your password"
          ></StyledInput>
          <input style={{ display: "none" }} type="file" id="file"></input>
          <label htmlFor="file">
            <StyledImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHQCLMdVF-KBkxDbPR59BLxRYTnbaoKcO4g&usqp=CAU"
              alt="img"
            />
          </label>
          <StyledButton>SignUp</StyledButton>
        </form>
        <SamllText>Do you have an account? Login</SamllText>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;
