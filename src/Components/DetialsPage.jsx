import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetialsPage = () => {
  const { id } = useParams();
  const [singleState, setSearchData] = useState("");

  useEffect(() => {
    getRes();
  }, [id]);

  const getRes = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=bcc4ff10c2939665232d75d8bf0ec093`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchData(data);
      console.log(setSearchData);
    } catch (e) {
      console.log(e, "error is here");
    }
  };

  return (
    <div>
      all details pages will come here
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${singleState.backdrop_path}`}
        alt=""
      />
      <p>{singleState.overview}</p>
      <div className="d-flex">
        <div className="d-block w-100"></div>
      </div>
    </div>
  );
};

export default DetialsPage;
