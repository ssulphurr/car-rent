import { useEffect, useState } from "react";
import CarCardsList from "../components/CarCardsList";
import getAllCars from "../services/api";

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);

  const updateCars = async () => {
    const fetchedCars = await getAllCars();
    setAllCars(fetchedCars);
  };

  useEffect(() => {
    updateCars();
  }, []);

  return (
    <>
      <div>Catalog</div>
      <CarCardsList data={allCars} />
    </>
  );
};

export default Catalog;
