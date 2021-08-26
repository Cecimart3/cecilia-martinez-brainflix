import { Component } from 'react';
import axios from 'axios';
import './HomePage.scss';
import CurrentVideo from '../../components/Videos/CurrentVideo/CurrentVideo';
import videos from '../../assets/data/video-details.json';
import VideoList from '../../components/Videos/VideoList/VideoList';
import nextVideos from '../../assets/data/videos.json';


class HomePage extends Component {
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

    render(){
        return (
        <div>
            <CurrentVideo selectedVideo={this.state.selectedVideo} />
            <div className='main'>
            <VideoList 
                updateSelectedVideo={this.updateSelectedVideo}
                nextVideos={this.state.nextVideos}
                selectedVideo={this.state.selectedVideo} 
            />
            </div> 
        </div>
        )
    }
}

export default HomePage;