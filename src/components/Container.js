import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 769px) {
    width: 714px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
  }
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
