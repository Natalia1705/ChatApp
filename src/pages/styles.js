import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #deaafa;
`;
export const FormWrapper = styled.div`
  display: flex;
  padding: 20px 60px;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
export const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #862ce5;
  ::placeholder {
    color: #d5d5d5;
  }
`;
export const Logo = styled.span`
  color: #862ce5;
  font-size: 24px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export const Title = styled.span`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #474747;
`;

export const StyledButton = styled.button`
  background-color: #862ce5;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: bold;
`;
export const SamllText = styled.p`
  font-size: 12px;
  margin-top: 10px;
  color: #474747;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  height: 180px;
`;
