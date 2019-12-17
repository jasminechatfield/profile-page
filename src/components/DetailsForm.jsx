import React from "react";

// The DetailsForm component is used to update user information for the state of the App which in turn updates the values in DetailsCard.

class DetailsForm extends React.Component {
  // The state is initialised with default values like the ones in the App component.
  state = {
    firstNameField: "Jazz",
    lastNameField: "Chatfield",
    dateOfBirthField: "1992-10-21",
    faveActivityField: "Writing"
  };

  // This function handles change within the form fields and sets the state with the new change each time it is made. In this way it binds it to the form field, so one cannot change without channging the other.
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // This function handles form submission. It takes the values from each of the form fields and calls a function passed down in props from the App, 'updateDetailsFromForm' which updates the state in the App with the new details. Because these values are the same in state, we could also take them from state to identical effect.
  handleSubmit = event => {
    event.preventDefault();
    const form = event.target.children[0];
    // The current value of the firstName field:
    const firstName = form.children[1].children[0].value;

    // The current value of the lastName field:
    const lastName = form.children[2].children[0].value;

    // The current value of the dateOfBirth field:
    const dateOfBirth = form.children[3].children[0].value;

    //The current value of the faveActivity field:
    const faveActivity = form.children[4].children[0].value;

    //All four of these values are passed into the function updateDetailsFromForm passed down in props.
    this.props.updateDetailsFromForm(
      firstName,
      lastName,
      dateOfBirth,
      faveActivity
    );
  };

  render() {
    // Destructuring items from state:
    const {
      firstNameField,
      lastNameField,
      dateOfBirthField,
      faveActivityField
    } = this.state;

    // Destructuring methods from above:
    const { handleChange, handleSubmit } = this;

    return (
      <div className="DetailsForm">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2> Update details </h2>
            <label>
              First name:{" "}
              <input
                type="text"
                id="firstNameField"
                name="firstNameField"
                onChange={handleChange}
                value={firstNameField}
              />
            </label>
            <label>
              Last name:{" "}
              <input
                type="text"
                id="lastNameField"
                name="lastNameField"
                onChange={handleChange}
                value={lastNameField}
              />
            </label>
            <label>
              Date of birth:{" "}
              <input
                type="date"
                id="dateOfBirthField"
                name="dateOfBirthField"
                onChange={handleChange}
                value={dateOfBirthField}
              />
            </label>
            <label>
              Favourite activity:{" "}
              <input
                type="text"
                id="faveActivityField"
                name="faveActivityField"
                onChange={handleChange}
                value={faveActivityField}
              />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default DetailsForm;
