/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
// SRG1Vk92HgTfP3F6gH
