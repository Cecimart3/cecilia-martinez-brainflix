import videos from '../../../assets/data/videos.json';
import './VideoList.scss'

const VideoList = ({ nextVideos, updateSelectedVideo }) => {
    const generateVideoComponent = (video) => {
        return (<li className='video-list' onClick={() => updateSelectedVideo(video.id)}>
            <img className='video-list__image' src={video.image} alt='video poster'/>
            <div>
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
            </div>
            
        </li>)
    }
    return (
        <ul> 
            {nextVideos.map(generateVideoComponent)}
         
        </ul>
    )
}

export default VideoList

