import videos from '../../../assets/data/video-details.json';
import './VideoPoster.scss';

const VideoPoster = () => {
    return (
        <div className='video'>
            <video controls className='video__poster' src='' poster={videos[0].image}></video>
        </div>

    )
}

export default VideoPoster;