import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants"; 
import axios from "axios";

export function useRequestData(path){

const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
  setIsLoading(true)
  axios
    .get(`${BASE_URL}${path}`)
    .then((response) => {
      setData(response.data);
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error);
      setError(true)
    });
},[path]);

return [data, isLoading, error]

}
