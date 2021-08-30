import './CurrentVideo.scss';


const CurrentVideo = ({ selectedVideo }) => {
    return (
        <div>
            <div className='video'>
                <video controls className='video__poster' src='' poster={selectedVideo.image}></video>
            </div>
        </div>
    )
}

export default CurrentVideo;