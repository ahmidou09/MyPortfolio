import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../features/navbar/NavBar";

const StyledAppLayout = styled.div`
  width: 100%;
  background-color: var(--color-background);
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
