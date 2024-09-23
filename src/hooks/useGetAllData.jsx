import { useEffect, useState } from "react";
import axios from "axios";

const useGetAllData = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesLoader, setPropertiesLoader] = useState(true);
  useEffect(() => {
    setPropertiesLoader(true);
    loadData();
  }, []);
  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://room-psi-ten.vercel.app/api/rooms/all-rooms"
      );
      const data = response.data;
      setProperties(data.rooms);
      setPropertiesLoader(false);
      console.log(data.rooms);
    } catch (error) {
      console.error(error);
      setPropertiesLoader(false);
    }
  };
  return [properties, propertiesLoader];
};

export default useGetAllData;

// To solve the CORS issue, add the following code to the server-side (vercel server)
// const cors = require('cors');
// app.use(cors({
//   origin: ['http://localhost:5173'],
//   credentials: true
// }));
