import {
  ChatsContainer,
  UserChat,
  StyledChatImg,
  UserChatInfo,
  UserChatName,
  Message,
} from "./styles";

export const Chats = () => {
  return (
    <ChatsContainer>
      <UserChat>
        <StyledChatImg
          src="https://www.bunko.pet/__export/1662503509966/sites/debate/img/2022/09/06/siames_tabby_point.jpg_172596871.jpg"
          alt="user imagen"
        />
        <UserChatInfo>
          <UserChatName>Pande-cobija</UserChatName>
          <Message>Hello</Message>
        </UserChatInfo>
      </UserChat>
      <UserChat>
        <StyledChatImg
          src="https://www.bunko.pet/__export/1662503509966/sites/debate/img/2022/09/06/siames_tabby_point.jpg_172596871.jpg"
          alt="user imagen"
        />
        <UserChatInfo>
          <UserChatName>Pande-cobija</UserChatName>
          <Message>Hello</Message>
        </UserChatInfo>
      </UserChat>
      <UserChat>
        <StyledChatImg
          src="https://www.bunko.pet/__export/1662503509966/sites/debate/img/2022/09/06/siames_tabby_point.jpg_172596871.jpg"
          alt="user imagen"
        />
        <UserChatInfo>
          <UserChatName>Pande-cobija</UserChatName>
          <Message>Hello</Message>
        </UserChatInfo>
      </UserChat>
    </ChatsContainer>
  );
};
