import { useEffect, useState } from "react";
import CarCardsList from "../components/CarCardsList";
import getAllCars from "../services/api";

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const updateCars = async () => {
      const fetchedCars = await getAllCars(page, 8);

      setAllCars((prevState) => {
        if (!prevState) {
          return fetchedCars;
        }

        if (prevState.length > 0) {
          console.log(prevState);
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

      <button onClick={handlePagination}>Load more</button>
    </>
  );
};

export default Catalog;
