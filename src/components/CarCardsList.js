import styled from "styled-components";
import CarCardItem from "./CarCardItem";

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CarCardsList = ({ data }) => {
  return (
    <>
      {data.length > 0 && (
        <UlStyled>
          {data.map((dataItem) => {
            return <CarCardItem key={dataItem.id} data={dataItem} />;
          })}
        </UlStyled>
      )}
    </>
  );
};

export default CarCardsList;
