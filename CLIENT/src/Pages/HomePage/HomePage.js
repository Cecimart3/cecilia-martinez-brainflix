import { Component } from 'react';
import './HomePage.scss';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import CurrentVideoInfo from '../../components/CurrentVideoInfo/CurrentVideoInfo';
import VideoList from '../../components/VideoList/VideoList';
import brainflixRequests from '../../utilities/apiCalls';


class HomePage extends Component {
    state = {
        selectedVideo: null,
        nextVideos: []
      };

      componentDidMount() {
        const videoId = this.props.match.params && this.props.match.params.id;
        videoId ? this.updateVideos(videoId) : this.getCurrentVideo();
      }; 

      getCurrentVideo = () => {
        brainflixRequests.getAllVideos().then(response => {
          this.setState({
            nextVideos: response.data,
          }) 
          return response.data[0].id
        }).then(id => this.updateVideos(id)).catch((error) => console.log(error))
      };

      componentDidUpdate(prevProps) {
        const videoId = this.props.match.params && this.props.match.params.id;
        if(prevProps.match.params.id !== videoId) {
          return videoId ? this.updateVideos(videoId) : this.getCurrentVideo();
        }
      };

      updateVideos = (id) => {
        brainflixRequests.getCurrentVideo(id).then(response =>
          this.setState({
            selectedVideo: response.data
          })
      )};

    render() {
      return (!this.state.selectedVideo ? <h1>Loading...</h1> :
        <div>
          <CurrentVideo selectedVideo={this.state.selectedVideo} />
          <div className='main'>
          <CurrentVideoInfo selectedVideo={this.state.selectedVideo} />
          <VideoList 
              updateSelectedVideo={this.updateVideos}
              nextVideos={this.state.nextVideos}
              selectedVideo={this.state.selectedVideo} 
          />
          </div> 
        </div>
      )}
}

export default HomePage;