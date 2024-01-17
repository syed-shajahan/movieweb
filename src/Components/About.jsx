import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gotimg from "./Gotimg";

const About = () => {
  const { id } = useParams();
  const [singleState, setSingleState] = useState("");

  //api.themoviedb.org/3/movie/575264?api_key=bcc4ff10c2939665232d75d8bf0ec093

  useEffect(() => {
    ssearch();
  }, [id]);

  const ssearch = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bcc4ff10c2939665232d75d8bf0ec093`
    )
      .then((res) => {
        return res.json();
      })
      .then((secres) => {
        setSingleState(secres);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="d-block w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="img-fluid">
                <Gotimg img={singleState.backdrop_path} />
              </div>
            </div>

            <div className="col-md-7">
              <p className="text-light my-5">{singleState.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
