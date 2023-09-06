import { Outlet, NavLink } from "react-router-dom";
import Container from "./Container";
import Navigation from "./Navigation";
import styled from "styled-components";

const NavWrapper = styled.div`
  background-color: #f7f7fb;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const SharedLayout = () => {
  return (
    <>
      <NavWrapper>
        <Container>
          <Navbar>
            <NavLink to="/">
              <img
                width={60}
                height={60}
                src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png"
                alt="go home"
              />
            </NavLink>
            <Navigation />
          </Navbar>
        </Container>
      </NavWrapper>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
