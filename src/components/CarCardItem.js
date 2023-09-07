import styled from "styled-components";

const LiStyled = styled.li`
  flex-basis: 274px;
  height: 426px;
  margin-bottom: 50px;
  position: relative;
`;

const ImgStyled = styled.img`
  width: 274px;
  height: 268px;
  display: block;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

const CarMainInfo = styled.div`
  font-family: Manrope;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CarDescriptionInfo = styled.div`
  font-family: Manrope;
  font-size: 12px;
  display: flex;
  color: rgba(18, 20, 23, 0.5);
`;

const ButtonStyled = styled.button`
  background-color: #3470ff;
  color: #fff;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
`;

const CarCardItem = ({ data }) => {
  const {
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

  const addressArr = address.split(",");

  return (
    <>
      <LiStyled>
        <ImgStyled src={img} alt="car name" />
        <CarMainInfo>
          <div>
            {make} <span style={{ color: "#3470FF" }}>{model}</span>, {year}
          </div>
          <div>{rentalPrice}</div>
        </CarMainInfo>
        <CarDescriptionInfo>
          {addressArr[1]} | {addressArr[2]} | {rentalCompany} <br />
          {type} | {model} | {mileage} | {functionalities[0]}
        </CarDescriptionInfo>
        <ButtonStyled>Learn more</ButtonStyled>
      </LiStyled>
    </>
  );
};

export default CarCardItem;
