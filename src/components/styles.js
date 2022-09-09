import styled from "styled-components";

// Sidebar Styles

export const SidebarContainer = styled.div`
  flex: 2;
  background-color: #5a0d77;
  overflow: hidden;
`;

// Navbar Styles
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #400a54;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Logo = styled.span``;
export const User = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledImg = styled.img`
  background-color: #971ec6;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserName = styled.span``;
export const StyledButton = styled.button`
  background-color: #862ce5;
  color: white;
  font-size: 10px;
  border: none;
  cursor: pointer;
`;

//Chat Styles
export const ChatContainer = styled.div`
  flex: 3;
`;

//Chats Styles
export const ChatsContainer = styled.div``;

export const Message = styled.p`
  font-size: 14px;
`;

//Input Styles
export const InputContainer = styled.div``;

// Message Styles
export const MessageContainer = styled.div``;

// Search Styles
export const SearchContainer = styled.div`
  border-bottom: 1px solid gray;
`;
export const SearchForm = styled.div``;
export const StyledInput = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  ::placeholder {
    color: lightgray;
  }
`;
export const UserChat = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  color: white;
  gap: 10px;
  cursor: pointer;
  :hover {
    background-color: #400a54;
  }
`;
export const StyledChatImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserChatInfo = styled.div`
  line-height: 10px;
`;
export const UserChatName = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
