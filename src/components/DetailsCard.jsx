import React from "react";

const DetailsCard = props => {
  const { firstName, lastName, dateOfBirth, faveActivity, faveColor } = props;

  return (
    <div className="DetailsCard">
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>Date of birth: {dateOfBirth}</h2>
      <h3>Favourite activity: {faveActivity}</h3>
      <h3>Favourite colour:</h3>
      <div
        className="colorBlock"
        style={{ width: "50px", height: "50px", backgroundColor: faveColor }}
      ></div>
    </div>
  );
};

export default DetailsCard;
