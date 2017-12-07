import _ from "lodash";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import NavButtons from "./components/nav-buttons";
import "./style/style.css";


const API_KEY = `AIzaSyBKtVkxP6XpbBnLyPIr5OJ7GbWe1mPn3f0`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ""
    };

    this.videoSearch("");
    this.liveFeed = this.liveFeed.bind(this);

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  liveFeed(term) {
    this.setState({term})
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 450);
    return (
      <div>
        <div>
          <SearchBar term={this.state.term} onSearchTermChange={videoSearch}/>
          <NavButtons liveFeed={this.liveFeed} />
        </div>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
