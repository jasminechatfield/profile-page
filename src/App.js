import React from "react";
import "./App.css";
import DetailsCard from "./components/DetailsCard";
import DetailsForm from "./components/DetailsForm";
import FriendDisplayer from "./components/FriendDisplayer";
import LoginHistoryDisplayer from "./components/LoginHistoryDisplayer";
import ColorPicker from "./components/ColorPicker";

class App extends React.Component {
  state = {
    firstName: "Jazz",
    lastName: "Chatfield",
    dateOfBirth: "1992-10-21",
    faveActivity: "Writing",
    bgColor: "#000000"
  };

  componentDidMount = () => {
    const { bgColor } = this.state;
    document.body.style.backgroundColor = bgColor;
  };

  updateDetailsFromForm = (firstName, lastName, dateOfBirth, faveActivity) => {
    this.setState({ firstName, lastName, dateOfBirth, faveActivity });
  };

  updateColorFromPicker = bgColor => {
    this.setState({ bgColor });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { bgColor } = this.state;
    if (prevState.bgColor !== bgColor) {
      document.body.style.backgroundColor = bgColor;
    }
  };

  render() {
    const { firstName, lastName, dateOfBirth, faveActivity } = this.state;
    return (
      <main style={{ backgroundColor: "#FFFFFF" }}>
        <DetailsCard
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
          faveActivity={faveActivity}
        />
        <div className="ProfilePic">
          <img
            src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
            alt={`${firstName} ${lastName}'s profile`}
            width="200"
          ></img>
        </div>
        <DetailsForm updateDetailsFromForm={this.updateDetailsFromForm} />
        <FriendDisplayer />
        <LoginHistoryDisplayer />
        <ColorPicker updateColorFromPicker={this.updateColorFromPicker} />
      </main>
    );
  }
}

export default App;
