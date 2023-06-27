import React, { Component } from 'react';
import './ColorContainer.css';
import ColorBox from './ColorBox';

class ColorContainer extends Component {
  render() {
    return (
      <div className="ColorContainer">
        {Array.from({ length: 24 }, (el, i) => (
          <ColorBox key={i} />
        ))}
      </div>
    );
  }
}

export default ColorContainer;
