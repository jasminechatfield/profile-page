import React from "react";
import { ChromePicker } from "react-color";
import * as api from "../api";

class ColorPicker extends React.Component {
  state = { color: "#000000" };

  randomColor = () => {
    api.getRandomColorHex().then(color => {
      this.setState({ color });
    });
  };

  handleChangeComplete = (color, event) => {
    console.log("state colour change");
    this.setState({ color: color.hex });
  };

  handleColorSubmit = event => {
    console.log("background colour change");
    const { updateColorFromPicker } = this.props;
    updateColorFromPicker(this.state.color);
  };

  render() {
    const { handleChangeComplete } = this;
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
        <button type="submit" onClick={this.handleColorSubmit}>
          Set background
        </button>
      </div>
    );
  }
}

export default ColorPicker;
