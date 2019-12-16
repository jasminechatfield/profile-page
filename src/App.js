import React from "react";
import "./App.css";
import DetailsCard from "./components/DetailsCard";
import DetailsForm from "./components/DetailsForm";

class App extends React.Component {
  state = {
    firstName: "Jazz",
    lastName: "Chatfield",
    dateOfBirth: "21st October 1992",
    faveActivity: "Writing",
    bgColor: "white"
  };

  componentDidMount = () => {
    document.body.style.backgroundColor = "black";
  };

  updateDetailsFromForm = (firstName, lastName, dateOfBirth, faveActivity) => {
    this.setState({ firstName, lastName, dateOfBirth, faveActivity });
  };

  render() {
    const {
      firstName,
      lastName,
      dateOfBirth,
      faveActivity,
      bgColor
    } = this.state;
    return (
      <main style={{ backgroundColor: bgColor }}>
        <DetailsCard
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
          faveActivity={faveActivity}
          updateDetailsFromForm={this.updateDetailsFromForm}
        />
        <div className="ProfilePic">
          <img
            src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
            alt={`${firstName} ${lastName}'s profile`}
            width="200"
          ></img>
        </div>
        <DetailsForm />
      </main>
    );
  }
}

export default App;
