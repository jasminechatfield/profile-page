import React from "react";
import FriendCard from "./FriendCard";

// The FriendDisplayer class component holds 9 friend objects in an array in state and generates FriendCards from the objects.

class FriendDisplayer extends React.Component {
  // The state is initialised with an array of 9 friend objects containing a name and picture URL each.
  state = {
    friends: [
      {
        name: "John",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Sunil",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Afshan",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Kelly",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Hex",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Kim",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Crystal",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Vasil",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      },
      {
        name: "Sven",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
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
            return <FriendCard friend={friend} />;
          })}
        </ul>
      </div>
    );
  }
}

export default FriendDisplayer;
