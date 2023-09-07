import axios from "axios";

const getAllCars = async () => {
  try {
    const response = await axios.get(
      "https://64876792beba62972790962c.mockapi.io/adverts"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllCars;
