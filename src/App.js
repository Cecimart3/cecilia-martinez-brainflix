import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CurrentVideo from './components/Videos/CurrentVideo/CurrentVideo';
import Description from './components/Videos/Description/Description';
import videos from './assets/data/video-details.json';
import VideoList from './components/Videos/VideoList/VideoList';
import nextVideos from './assets/data/videos.json';
import Comments from './components/Videos/Comments/Comments';
import CommentForm from './components/Videos/Comments/CommentForm/CommentForm';

class App extends React.Component {
  state = {
    nextVideos,
    videos,
    selectedVideo: videos[0]
  };

  updateSelectedVideo = (id) => {
    let selectedVideo = this.state.videos.find((video) => video.id === id)
    let updatedVideoList = this.state.videos.filter((video) => video !== selectedVideo)
    
    this.setState({
      selectedVideo: selectedVideo,
      nextVideos: updatedVideoList
    })
    //console.log('updateSelectedVideo', this.state.selectedVideo)
  }

  render() {
    return (
      <main>
        <Header />
        <CurrentVideo selectedVideo={this.state.selectedVideo} />
        <Description selectedVideo={this.state.selectedVideo}/>
        <CommentForm selectedVideo={this.state.selectedVideo}/>
        <Comments selectedVideo={this.state.selectedVideo}/>
        <VideoList 
          updateSelectedVideo={this.updateSelectedVideo}
          nextVideos={this.state.nextVideos} 
        />
      </main>
    );
  }   
}

export default App;
