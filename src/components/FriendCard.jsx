import React from "react";

const FriendCard = ({ friend }) => {
  const { name, picture } = friend;
  return (
    <li key={name}>
      <img src={picture} width="50" alt={`${name}`} />
      <p>{name}</p>
    </li>
  );
};

export default FriendCard;
