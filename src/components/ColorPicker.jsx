import React from "react";
import { ChromePicker } from "react-color";
import * as api from "../api";

// The ColorPicker class component keeps a colour hex in state and when it is updated it calls the updateColorFromPicker function in the App component to update the background colour of the body.

// ChromePicker is an imported react-color package that creates a slider and colour picker.

class ColorPicker extends React.Component {
  // The state is initialised with a default colour. This is tied to the colour picker and automatically updates when a new colour is selected.
  state = { color: "#000000" };

  // randomColor calls the API function getRandomColorHex and updates the Chrome Picker with that hex.
  randomColor = () => {
    api.getRandomColorHex().then(color => {
      this.setState({ color });
    });
  };

  // This function handles the colour picker when the change is complete and sets the state of the component, ready for the handleColorSubmit function to be called on submit.
  handleChangeComplete = (color, event) => {
    console.log("state colour change");
    this.setState({ color: color.hex });
  };

  // This function calls updateColorFromPicker, a function passed down in props, with the colour that is currently in state, which sets the background colour of the body.
  handleColorSubmit = event => {
    console.log("background colour change");
    // Destructuring the updateColorFromPicker function out of the component's props:
    const { updateColorFromPicker } = this.props;
    updateColorFromPicker(this.state.color);
  };

  render() {
    // Destructuring functions out of the component:
    const { handleChangeComplete, handleColorSubmit } = this;
    // Destructuring color out of state:
    const { color } = this.state;

    return (
      <div className="ColorPicker">
        <h2>Favourite colour</h2>
        <button type="button" onClick={this.randomColor}>
          Randomise
        </button>
        <ChromePicker
          className="ChromePicker"
          color={color}
          onChangeComplete={handleChangeComplete}
        />
        <br />
        <button type="submit" onClick={handleColorSubmit}>
          Set background
        </button>
      </div>
    );
  }
}

export default ColorPicker;
