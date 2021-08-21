import './CurrentVideo.scss';

const CurrentVideo = ({ selectedVideo }) => {
    return (
        <div className='video'>
            <video controls className='video__poster' src='' poster={selectedVideo.image}></video>
        </div>
    )
}

export default CurrentVideo;