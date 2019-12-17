import React from "react";

// The DetailsCard component displays facts about the user including first name, last name, date of birth, favourite activity and favourite colour.

const DetailsCard = props => {
  // Destructuring elements passed down in props:
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
