import { Component } from 'react';
import './HomePage.scss';
import CurrentVideo from '../../components/Videos/CurrentVideo/CurrentVideo';
import CurrentVideoInfo from '../../components/Videos/CurrentVideo/CurrentVideoInfo/CurrentVideoInfo';
import VideoList from '../../components/Videos/VideoList/VideoList';
import brainflixRequests from '../../utilities/apiCalls';


class HomePage extends Component {
    state = {
        selectedVideo: null,
        nextVideos: []
      };

      componentDidMount() {
        this.getCurrentVideo();
      }; 

      getCurrentVideo = () => {
        brainflixRequests.getAllVideos().then(response => {
          this.setState({
            nextVideos: response.data,
          }) 
          return response.data[0].id
        }).then(id => this.updateVideos(id)).catch((error) => console.log(error))
      }

      componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
          return this.updateVideos(this.props.match.params.id);
        }
      }

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