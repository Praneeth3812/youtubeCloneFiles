import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";
import Youtube from "./api/Youtube";

class App extends Component {

    state={
videos : [],
selectedVideo : null,
    }


    componentDidMount() {
      this.handleSubmit('ReactJS')
    }

  handleSubmit = async (searchTerm) => {
    const response = await Youtube.get('search',{
        params: {
        part : 'snippet',
        maxResults : 5,
        key: "AIzaSyBhAkpgh5nor0pB677vKhS4D3sz-K8AsKo",
        q: searchTerm,
      }});
    this.setState({videos : response.data.items , selectedVideo :response.data.items[0]})
  };


  onVideoSelect =(video) => {
   this.setState({selectedVideo : video})
  }

  render() {
      const {selectedVideo,videos} = this.state;
    return (
      <Grid justify="center" container spacing={2}  style={{overflow  : "hidden"}} >
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12} >
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8} >
            <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4} >
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
