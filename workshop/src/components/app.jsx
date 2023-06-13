/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      {id: "SRG1Vk92HgTfP3F6gH" },
      {id: "4Zo41lhzKt6iZ8xff9" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="SRG1Vk92HgTfP3F6gH" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
