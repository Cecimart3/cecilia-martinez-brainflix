import './CommentList.scss';
import CommentItem from './CommentItem/CommentItem';

const CommentList = ({ selectedVideo }) => {
    return (
        <ul className='comments'> 
            {selectedVideo.comments.map(CommentItem)}
        </ul>
    )
}



export default CommentList;