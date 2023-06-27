import React, { Component } from 'react';
import './ColorBox.css';
import { genColor } from './helper';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { color: genColor(255) };
    this.handleClick = this.handleClick.bind(this);
  }

  updateColor() {
    let newColor;
    do {
      newColor = genColor(255);
    } while (newColor === this.state.color); //Until this condition is false, then set state
    this.setState({ color: newColor });
  }

  handleClick() {
    this.updateColor();
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default ColorBox;
