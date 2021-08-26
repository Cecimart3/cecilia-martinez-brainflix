import './CurrentVideo.scss';
import Description from '../Description/Description';
import CommentForm from '../CommentList/CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const CurrentVideo = ({ selectedVideo }) => {
    return (
        <div>
            <div className='video'>
                <video controls className='video__poster' src='' poster={selectedVideo.image}></video>
            </div>
            <div className='main__info'>
                <Description selectedVideo={selectedVideo}/>
                <CommentForm selectedVideo={selectedVideo}/>
                <CommentList selectedVideo={selectedVideo}/>
            </div>
        </div>
       
        
    )
}

export default CurrentVideo;