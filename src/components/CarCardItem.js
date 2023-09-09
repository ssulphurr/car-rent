import { useState } from "react";
import styled from "styled-components";
import CarModal from "./CarModal";

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
  font-weight: 500;
  line-height: 24px;
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
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
`;

const CarCardItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = data;

  const addressArr = address.split(",");
  const mileageWithComa = (mileage / 1000).toString().replace(".", ",");

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
          {type} | {model} | {mileageWithComa} | {functionalities[0]}
        </CarDescriptionInfo>
        <ButtonStyled onClick={toggleModal}>Learn more</ButtonStyled>
      </LiStyled>

      {showModal && <CarModal data={data} handleToggle={toggleModal} />}
    </>
  );
};

export default CarCardItem;
