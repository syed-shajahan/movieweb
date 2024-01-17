import React from "react";
import Saddy from "../assets/img/saddy.jpg";
function Gotimg(props) {
  console.log(props.img);
  return (
    <div>
      {props.img ? (
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.img}`}
          alt=""
        />
      ) : (
        <img src={Saddy} alt="" />
      )}
    </div>
  );
}

export default Gotimg;
