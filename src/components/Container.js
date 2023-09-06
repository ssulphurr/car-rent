import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = () => {
  return (
    <ContainerStyled>
      <Outlet />
    </ContainerStyled>
  );
};

export default Container;
