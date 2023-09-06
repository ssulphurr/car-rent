import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #2b2730;
  font-size: 20px;

  &.active {
    color: #fb6090;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 12px;
`;

export default function Navigation() {
  return (
    <nav>
      <NavbarLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </NavbarLinks>
    </nav>
  );
}
