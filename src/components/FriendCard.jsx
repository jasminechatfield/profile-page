import React from "react";

// The FriendCard functional component returns a list item containing the name and picture of the friend.

const FriendCard = ({ friend }) => {
  // Destructuring name and picture from the friend object:
  const { name, picture } = friend;
  return (
    <li key={name}>
      <img src={picture} width="50" alt={`${name}`} />
      <p>{name}</p>
    </li>
  );
};

export default FriendCard;
