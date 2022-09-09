import { Chats } from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import { SidebarContainer } from "./styles";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Navbar />
        <Search />
        <Chats />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
