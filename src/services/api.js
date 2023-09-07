import axios from "axios";

const getAllCars = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://64876792beba62972790962c.mockapi.io/adverts?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllCars;
