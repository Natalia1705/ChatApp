import {
  NavbarContainer,
  Logo,
  User,
  StyledImg,
  UserName,
  StyledButton,
} from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Chat</Logo>
      <User>
        <StyledImg
          src="https://t2.ea.ltmcdn.com/es/posts/5/9/5/leyenda_del_gato_carey_25595_4_600.webp"
          alt="user Image"
        />
        <UserName>Pandereja</UserName>
        <StyledButton>LogOuts</StyledButton>
      </User>
    </NavbarContainer>
  );
};

export default Navbar;
