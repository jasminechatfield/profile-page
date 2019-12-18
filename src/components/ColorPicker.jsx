import React from "react";
import { ChromePicker } from "react-color";
import * as api from "../api";

// The ColorPicker class component keeps a colour hex in state and when it is updated it calls the updateColorFromPicker function in the App component to update the background colour of the body.

// ChromePicker is an imported react-color package that creates a slider and colour picker.

// react-color is currently throwing a warning due to 'componentWillReceiveProps' being deprecated. This has been discussed here: https://github.com/casesandberg/react-color/issues/634

// There is a patch available here until the issue is fixed: https://gist.github.com/hlodver/ee336b071f2b2b85c4903660fb8cd686

class ColorPicker extends React.Component {
  // The state is initialised with a default colour. This is tied to the colour picker and automatically updates when a new colour is selected.
  state = { color: "#ABE8B1" };

  // randomColor calls the API function getRandomColorHex and updates the Chrome Picker with that hex.
  randomColor = () => {
    api.getRandomColorHex().then(color => {
      // Set the state with the random hex colour, and by extension the colour in the colour picker:
      this.setState({ color });
    });
  };

  // This function handles the colour picker when the change is complete and sets the state of the component, ready for the handleColorSubmit function to be called on submit.
  handleChangeComplete = (color, event) => {
    // Log event to the console:
    console.log(event);
    // Set the state with the hex of the colour from the picker:
    this.setState({ color: color.hex });
  };

  // This function calls updateColorFromPicker, a function passed down in props, with the colour that is currently in state, which sets the background colour of the body.
  handleColorSubmit = event => {
    // Log event to the console:
    console.log(event);
    // Destructuring the updateColorFromPicker function out of the component's props:
    const { updateColorFromPicker } = this.props;
    // Call updateColorFromPicker with the state colour to update the body background:
    updateColorFromPicker(this.state.color);
  };

  render() {
    // Destructuring functions out of the component:
    const { handleChangeComplete, handleColorSubmit, randomColor } = this;
    // Destructuring color out of state:
    const { color } = this.state;

    return (
      <div className="ColorPicker">
        <h2>Favourite colour</h2>
        <button type="button" onClick={randomColor}>
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
