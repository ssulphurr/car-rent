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

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

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

  return (
    <>
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
