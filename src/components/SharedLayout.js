import { Outlet, NavLink } from "react-router-dom";
import Container from "./Container";
import Navigation from "./Navigation";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7fb;
  height: 80px;
`;

const SharedLayout = () => {
  return (
    <>
      <Navbar>
        <NavLink to="/">
          <img
            width={120}
            height={120}
            src="https://static.vecteezy.com/system/resources/thumbnails/003/694/243/small/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg"
            alt="go home"
          />
        </NavLink>
        <Navigation />
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
