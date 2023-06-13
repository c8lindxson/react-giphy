/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "SRG1Vk92HgTfP3F6gH"
    };
    this.search("frog");
  }

  search = (query) => {
    // API call
    giphy('istUe8Sac5uRmEyLnjhjlK633CII8Hca').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // gif data
      this.setState({
        gifs: result.data
      });
    });
  }

  selectedGif = (event) => {
    this.setState({
      selectedGifId: event.gif.id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
