import './VideoListItem.scss';
import { Link } from 'react-router-dom'

const VideoListItem = (video) => {
    return (
    <Link to={`/videos/${video.id}`} key={video.id} className='video-list__link'>
        <li className='video-list__item'>
            <img className='video-list__image' src={video.image} alt='video poster'/>
            <div className='video-list__info'>
                <h3 className='video-list__title'>{video.title}</h3>
                <p className='video-list__chanel'>{video.channel}</p>
            </div> 
        </li>
    </Link>)
}

export default VideoListItem;