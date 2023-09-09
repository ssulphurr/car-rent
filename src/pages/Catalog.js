import { useEffect, useState } from "react";
import { styled } from "styled-components";
import CarCardsList from "../components/CarCardsList";
import getAllCars from "../services/api";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadMoreBtn = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PStyled = styled.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

// const selectStyled = styled.select`
//   display: flex;
//   width: 160px;
//   height: 48px;
//   padding: 14px 41px 14px 24px;
// `;

// const ButtonStyled = styled.button`
//   background-color: #3470ff;
//   color: #fff;
//   font-family: Manrope;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 20px;
//   width: 136px;
//   height: 48px;
//   border-radius: 12px;
//   border: none;
//   cursor: pointer;
// `;

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  // const [model, setModel] = useState(null);
  // const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const updateCars = async () => {
      setIsLoading(true);

      const fetchedCars = await getAllCars(page, 8);

      setAllCars((prevState) => {
        if (fetchedCars.length === 0) {
          setIsLoading(false);
          setShowBtn(false);
        }

        if (!prevState) {
          setIsLoading(false);

          return fetchedCars;
        }

        if (prevState.length > 0) {
          setIsLoading(false);

          return [...prevState, ...fetchedCars];
        }
      });
    };

    updateCars();
  }, [page]);

  const handlePagination = () => {
    setPage(page + 1);
  };

  // const handleSelect = (e) => {
  //   setModel(e.target.value);
  // };

  // useEffect(() => {
  //   const filteredArr = allCars.filter((c) => {
  //     if (c.model === model) {
  //       return c;
  //     }
  //   });
  //   setFilteredCars(filteredArr);
  // }, [model, allCars]);

  return (
    <>
      {/* <CenterContainer>
        <div>
          <PStyled>Car brand</PStyled>
          <select name="brand" onClick={handleSelect}>
            {allCars.map((car) => {
              return <option value={car.model}>{car.model}</option>;
            })}
          </select>
        </div>
        <ButtonStyled>Search</ButtonStyled>
      </CenterContainer>

      {!model ? (
        <CarCardsList data={allCars} />
      ) : (
        <CarCardsList data={filteredCars} />
      )} */}

      <CarCardsList data={allCars} />

      <CenterContainer>
        {isLoading && <PStyled>Loading...</PStyled>}

        {!isLoading && showBtn && (
          <LoadMoreBtn onClick={handlePagination}>Load more</LoadMoreBtn>
        )}

        {!showBtn && <PStyled>There is no more car left</PStyled>}
      </CenterContainer>
    </>
  );
};

export default Catalog;
