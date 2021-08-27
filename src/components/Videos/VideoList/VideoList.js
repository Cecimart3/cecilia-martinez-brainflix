import { Link, Switch } from 'react-router-dom'
import './VideoList.scss'

const VideoList = ({ nextVideos, selectedVideo }) => {
    const generateVideoComponent = (video) => {
        return (
        <Link to={`/videos/${video.id}`} key={video.id}>
            <li className='video-list__item'>
                <img className='video-list__image' src={video.image} alt='video poster'/>
                <div className='video-list__info'>
                    <h3 className='video-list__title'>{video.title}</h3>
                    <p className='video-list__chanel'>{video.channel}</p>
                </div> 
            </li>
        </Link>)
    }
    return (
        <div>
            <h4 className='video-list__next-title'>Next Video</h4>
            <ul className='video-list'> 
                {nextVideos.filter((video) => video.id !== selectedVideo.id).map(generateVideoComponent)}
            </ul>
        </div>
    )
}

export default VideoList

