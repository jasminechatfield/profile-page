import React from "react";
import FriendCard from "./FriendCard";

// The FriendDisplayer class component holds 9 friend objects in an array in state and generates FriendCards from the objects.

class FriendDisplayer extends React.Component {
  // The state is initialised with an array of 9 friend objects containing a name and picture URL each.
  state = {
    friends: [
      {
        name: "John",
        picture: "https://placedog.net/50/50?random&s=a"
      },
      {
        name: "Sunil",
        picture: "https://placedog.net/50/50?random&s=b"
      },
      {
        name: "Afshan",
        picture: "https://placedog.net/50/50?random&s=c"
      },
      {
        name: "Kelly",
        picture: "https://placedog.net/50/50?random&s=d"
      },
      {
        name: "Hex",
        picture: "https://placedog.net/50/50?random&s=e"
      },
      {
        name: "Kim",
        picture: "https://placedog.net/50/50?random&s=f"
      },
      {
        name: "Crystal",
        picture: "https://placedog.net/50/50?random&s=g"
      },
      {
        name: "Vasil",
        picture: "https://placedog.net/50/50?random&s=h"
      },
      {
        name: "Sven",
        picture: "https://placedog.net/50/50?random&s=i"
      }
    ]
  };
  render() {
    // Deconstructing friends from the state:
    const { friends } = this.state;

    // The friends array is mapped into individual FriendCard functional components.
    return (
      <div className="FriendDisplayer">
        <h2>Friends</h2>
        <ul>
          {friends.map(friend => {
            return <FriendCard key={friend.name} friend={friend} />;
          })}
        </ul>
      </div>
    );
  }
}

export default FriendDisplayer;
