import React from "react";
import { ChromePicker } from "react-color";

class ColorPicker extends React.Component {
  state = { color: "#000000" };

  handleColorSubmit = event => {
    console.log("background colour change");
    const { updateColorFromPicker } = this.props;
    updateColorFromPicker(this.state.color);
  };

  handleChangeComplete = (color, event) => {
    console.log("state colour change");
    this.setState({ color: color.hex });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.color !== this.state.color) {
  //     // api call goes here
  //   }
  // };

  render() {
    const { handleChangeComplete } = this;
    const { color } = this.state;

    return (
      <div className="colorPicker">
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        <button type="submit" onClick={this.handleColorSubmit}>
          Change background
        </button>
        <br />
        <button type="button" onClick={this.randomColor}>
          Change to random colour
        </button>
      </div>
    );
  }
}

export default ColorPicker;
