import React from "react";

const DetailsCard = props => {
  const { firstName, lastName, dateOfBirth, faveActivity } = props;

  return (
    <div className="DetailsCard">
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>Date of birth: {dateOfBirth}</h2>
      <h3>Favourite activity: {faveActivity}</h3>
    </div>
  );
};

export default DetailsCard;
