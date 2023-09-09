import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const modalRoot = document.querySelector("#modal-root");

const Overlay = styled.div`
  background-color: rgba(18, 20, 23, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDiv = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  width: 541px;
  min-height: 752px;
  box-sizing: border-box;
  position: relative;
  border-radius: 24px;
  background: #fff;
`;

const SvgStyled = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 248px;
  display: block;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

const CarMainInfo = styled.div`
  font-family: Manrope;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CarDescriptionTitle = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;

const CarDescriptionInfo = styled.div`
  font-family: Manrope;
  font-size: 12px;
  display: flex;
  color: rgba(18, 20, 23, 0.5);
`;

const RentalInfoList = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const RentalInfoItem = styled.li`
  display: flex;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const AStyled = styled.a`
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  box-sizing: border-box;
  width: 168px;
  height: 44px;
  text-align: center;
  padding: 12px 0;
  text-decoration: none;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

const CarModal = ({ data, handleToggle }) => {
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
    address,
    rentalConditions,
    mileage,
  } = data;

  const addressArr = address.split(",");
  const mileageWithComa = (mileage / 1000).toString().replace(".", ",");
  const rentalConditionsArr = [
    ...rentalConditions.split("\n"),
    `Mileage: ${mileageWithComa}`,
    `Price: ${rentalPrice}`,
  ];

  // Esc click
  const escFunction = useCallback(
    (e) => {
      if (e.key === "Escape") {
        handleToggle();
      }
    },
    [handleToggle]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  // Overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  return createPortal(
    <>
      <Overlay onClick={handleOverlayClick}>
        <ModalDiv>
          <SvgStyled
            onClick={handleToggle}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SvgStyled>

          <ImgStyled src={img} alt={model} />
          <CarMainInfo>
            <div>
              {make} <span style={{ color: "#3470FF" }}>{model}</span>, {year}
            </div>
          </CarMainInfo>
          <CarDescriptionInfo>
            {addressArr[1]} | {addressArr[2]} | Id: {id} | Year: {year} | Type:{" "}
            {type} <br />
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </CarDescriptionInfo>

          <CarDescriptionTitle>{description}</CarDescriptionTitle>

          <CarDescriptionTitle>
            Accessories and Functionalities:
          </CarDescriptionTitle>

          <CarDescriptionInfo>
            {accessories.map((a, i, arr) => {
              if (i === arr.length - 1) {
                return `${a}`;
              }
              return `${a} | `;
            })}
            <br />
            {functionalities.map((f, i, arr) => {
              if (i === arr.length - 1) {
                return `${f}`;
              }
              return `${f} | `;
            })}
          </CarDescriptionInfo>
          <br />

          <CarDescriptionTitle>Rental Conditions:</CarDescriptionTitle>
          <RentalInfoList>
            {rentalConditionsArr.map((c, i) => {
              let cArr = [c];
              if (c.includes(":")) {
                cArr = c.split(":");
                cArr[0] = cArr[0] + ":  ";
              }
              return (
                <RentalInfoItem key={i}>
                  {cArr[0]} <span style={{ color: "#3470FF" }}>{cArr[1]}</span>
                </RentalInfoItem>
              );
            })}
          </RentalInfoList>

          <AStyled href="tel:+380730000000">Rental car</AStyled>
        </ModalDiv>
      </Overlay>
    </>,
    modalRoot
  );
};

export default CarModal;
