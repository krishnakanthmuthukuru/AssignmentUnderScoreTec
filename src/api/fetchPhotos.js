import axios from "axios";

const fetchPhotos = async (page, pageLimit) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${pageLimit}`
  );
  return data;
};

export default fetchPhotos;
