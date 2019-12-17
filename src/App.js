import React from "react";
import "./App.css";
import DetailsCard from "./components/DetailsCard";
import DetailsForm from "./components/DetailsForm";
import FriendDisplayer from "./components/FriendDisplayer";
import LoginHistoryDisplayer from "./components/LoginHistoryDisplayer";
import ColorPicker from "./components/ColorPicker";

class App extends React.Component {
  // The state is initialised with default values for first name, last name, date of birth, favourite activity and favourite/background colour.
  state = {
    firstName: "Jazz",
    lastName: "Chatfield",
    dateOfBirth: "1992-10-21",
    faveActivity: "Writing",
    bgColor: "#000000"
  };

  // When the component mounts, it sets the body background colour from the DOM as the bgColor variable in state.
  componentDidMount = () => {
    const { bgColor } = this.state;
    document.body.style.backgroundColor = bgColor;
  };

  // Every time the component updates, it compares the bgColor of the previous state to the current state. If they are not equal, it re-sets the body background colour to the new colour.
  componentDidUpdate = (prevProps, prevState) => {
    const { bgColor } = this.state;
    if (prevState.bgColor !== bgColor) {
      document.body.style.backgroundColor = bgColor;
    }
  };

  // This function will be passed into the DetailsForm component to be able to set the App state using the values of the form fields within.
  updateDetailsFromForm = (firstName, lastName, dateOfBirth, faveActivity) => {
    this.setState({ firstName, lastName, dateOfBirth, faveActivity });
  };

  // This function will be passed into the ColorPicker component to be able to set the App state using the chosen colour.
  updateColorFromPicker = bgColor => {
    this.setState({ bgColor });
  };

  render() {
    // Destructuring elements from state:
    const {
      firstName,
      lastName,
      dateOfBirth,
      faveActivity,
      bgColor
    } = this.state;

    return (
      <main style={{ backgroundColor: "#FFFFFF" }}>
        <DetailsCard
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
          faveActivity={faveActivity}
          faveColor={bgColor}
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
