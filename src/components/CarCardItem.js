import styled from "styled-components";

const ImgStyled = styled.img`
  width: 274px;
  height: 268px;
`;

const LiStyled = styled.li`
  flex-basis: 274px;
`;

const CarCardItem = ({ data }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = data;

  return (
    <>
      <LiStyled>
        <ImgStyled src={img} alt="car name" />
        <p>{id}</p>
        <p>car price</p>
        <p>car features</p>
        <button>Learn more</button>
      </LiStyled>
    </>
  );
};

export default CarCardItem;
