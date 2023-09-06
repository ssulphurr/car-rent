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

export default function Navigation() {
  return (
    <nav>
      <div>
        <StyledLink to="/">Home</StyledLink>

        <div>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </div>
      </div>
    </nav>
  );
}
