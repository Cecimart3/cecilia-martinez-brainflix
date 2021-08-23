import './VideoList.scss'

const VideoList = ({ nextVideos, updateSelectedVideo, selectedVideo }) => {
    const generateVideoComponent = (video) => {
        return (<li className='video-list__item' onClick={() => updateSelectedVideo(video.id)}>
            <img className='video-list__image' src={video.image} alt='video poster'/>
            <div className='video-list__info'>
                <h3 className='video-list__title'>{video.title}</h3>
                <p className='video-list__chanel'>{video.channel}</p>
            </div>
            
        </li>)
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

