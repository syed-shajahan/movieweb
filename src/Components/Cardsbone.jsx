import React from "react";
import Skeleton from "react-loading-skeleton";

const Cardsbone = ({ cards, ...others }) => {
  return Array(cards)
    .fill(0)
    .map((e, i) => (
      <div className="col-md-3">
        <Skeleton height={200} duration={2} />
        <p>
          <Skeleton count={1} duration={2} />
        </p>
        <p>
          <Skeleton count={2} duration={2} />
        </p>
      </div>
    ));
};

export default Cardsbone;
