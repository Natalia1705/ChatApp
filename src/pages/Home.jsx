import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { HomeContainer, HomeWrapper } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Sidebar />
        <Chat />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
