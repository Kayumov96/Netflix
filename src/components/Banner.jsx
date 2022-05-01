import React, { useState, useEffect } from "react";
import axios from "./Base/axious";
import req from "./Base/request";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const responseData = await axios.get(req.fetchNetflixOriginals);
      console.log(responseData);
    };
    fetchMovie();
  });
  return <div>Banner</div>;
};
export default Banner;
