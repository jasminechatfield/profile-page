import React from "react";

class DetailsForm extends React.Component {
  state = {
    firstNameField: "Jazz",
    lastNameField: "Chatfield",
    dateOfBirthField: "",
    faveActivityField: "Writing"
  };

  handleChange = event => {
    console.log(event);
    console.log([event.target.name]);
    console.log(this.state[event.target.name]);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    console.log("hello");
    console.log(event);
    event.preventDefault();
  };

  render() {
    const {
      firstNameField,
      lastNameField,
      dateOfBirthField,
      faveActivityField
    } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="DetailsForm">
        <fieldset onSubmit={handleSubmit}>
          <legend>Update details</legend>
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
              type="text"
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
      </div>
    );
  }
}

export default DetailsForm;
