import Description from '../../Description/Description';
import CommentForm from '../../CommentList/CommentForm/CommentForm';
import CommentList from '../../CommentList/CommentList';

const CurrentVideoInfo = ({ selectedVideo }) => {
    return (
        <div className='main__info'>
                <Description selectedVideo={selectedVideo}/>
                <CommentForm selectedVideo={selectedVideo}/>
                <CommentList selectedVideo={selectedVideo}/>
        </div>
    )
}

export default CurrentVideoInfo;