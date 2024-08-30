import React from "react";

const CountingCardItem = ({ description, counting }) => {
  return (
    <div className="counting-card-item">
      <h2>{counting}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CountingCardItem;
