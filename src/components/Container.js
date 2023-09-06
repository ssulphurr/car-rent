import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
