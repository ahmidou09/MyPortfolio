import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../features/navbar/NavBar";

const StyledAppLayout = styled.div`
  height: 100vh;
  background-color: var(--color-grey-0);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
