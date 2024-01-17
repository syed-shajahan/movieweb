import React from "react";

import Saddy from "../assets/img/saddy.jpg";

const Nofound = () => {
  return (
    <div>
      <div className="flot_bx">
        <img src={Saddy} alt="" />
        <h1 className="text-light" style={{}}>
          No Data found
        </h1>
      </div>
    </div>
  );
};

export default Nofound;
