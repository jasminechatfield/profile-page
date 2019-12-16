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
    event.preventDefault();
    const form = event.target.children[0];
    const firstName = form.children[1].children[0].value;
    const lastName = form.children[2].children[0].value;
    const dateOfBirth = form.children[3].children[0].value;
    const faveActivity = form.children[4].children[0].value;
    this.props.updateDetailsFromForm(
      firstName,
      lastName,
      dateOfBirth,
      faveActivity
    );
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
        <form onSubmit={handleSubmit}>
          <fieldset>
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
        </form>
      </div>
    );
  }
}

export default DetailsForm;
