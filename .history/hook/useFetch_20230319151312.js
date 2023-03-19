import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (enpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "28c1179250msh2a65400e05a9c99p1943d5jsn4b3b5cc0d49d",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};
