import React from "react";
import FriendCard from "./FriendCard";

class FriendDisplayer extends React.Component {
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
        name: "Sparrowhawk",
        picture: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      }
    ]
  };
  render() {
    const { friends } = this.state;
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
