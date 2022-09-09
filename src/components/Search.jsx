import {
  SearchContainer,
  SearchForm,
  StyledInput,
  UserChat,
  StyledChatImg,
  UserChatInfo,
  UserChatName,
} from "./styles";

const Search = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <StyledInput type="text" placeholder="Find a user" />
      </SearchForm>
      <UserChat>
        <StyledChatImg
          src="https://www.bunko.pet/__export/1662503509966/sites/debate/img/2022/09/06/siames_tabby_point.jpg_172596871.jpg"
          alt="user imagen"
        />
        <UserChatInfo>
          <UserChatName>Pande-cobija</UserChatName>
        </UserChatInfo>
      </UserChat>
    </SearchContainer>
  );
};

export default Search;
