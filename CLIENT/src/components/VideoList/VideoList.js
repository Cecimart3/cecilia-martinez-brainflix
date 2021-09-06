import './VideoList.scss';
import VideoListItem from '../VideoListItem/VideoListItem';

const VideoList = ({ nextVideos, selectedVideo }) => {
    return (
        <div className='video-list__container'>
            <h4 className='video-list__next-title'>Next Video</h4>
            <ul className='video-list'> 
                {nextVideos.filter((video) => video.id !== selectedVideo.id).map(VideoListItem)}
            </ul>
        </div>
    )
}

export default VideoList

