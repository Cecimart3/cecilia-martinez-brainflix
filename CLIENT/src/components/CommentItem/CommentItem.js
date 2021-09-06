import './CommentItem.scss';
import postDate from '../../utilities/date';

const CommentItem = (comment) => {
    return ( 
        <li className='comments__item' key={comment.id}>
            <div className='comments__icon'>
            </div>
            <div className='comments__info'>
                <div className='comments__posted'>
                    <h4 className='comments__user'>{comment.name}</h4>
                    <h5 className='comments__date'>{postDate(comment.timestamp)}</h5>
                </div>
                <p className='comments__comment'>{comment.comment}</p>
            </div>
        </li>
    )
}

export default CommentItem;