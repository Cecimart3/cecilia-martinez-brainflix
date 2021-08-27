import { Component } from 'react';
import './HomePage.scss';
import CurrentVideo from '../../components/Videos/CurrentVideo/CurrentVideo';
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
        }).then(id => this.updateVideos(id))
      }

      componentDidUpdate(prevProps) {
       this.updateVideos(this.props.match.params.id);
      }

      updateVideos = (id) => {
        brainflixRequests.getCurrentVideo(id).then(response =>
          this.setState({
            selectedVideo: response.data
          })
      )};

    render() {
      if(!this.state.selectedVideo){
        return <h1>Loading...</h1>
      }
        return (
        <div>
            <CurrentVideo selectedVideo={this.state.selectedVideo} />
            <div className='main'>
            <VideoList 
                updateSelectedVideo={this.updateVideos}
                nextVideos={this.state.nextVideos}
                selectedVideo={this.state.selectedVideo} 
            />
            </div> 
        </div>
        )
    }
}

export default HomePage;