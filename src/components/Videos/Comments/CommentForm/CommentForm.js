import './CommentForm.scss';
import Icon from '../../../Icon/Icon';
import Button from '../../../Button/Button';

const CommentForm = ({ selectedVideo }) => {
    //console.log(selectedVideo)
    return (
        <div>
            <h3>{selectedVideo.comments.length} Comments</h3>
            <form>
                <h5>Join the Conversation</h5>
                <div>
                    <Icon />
                </div>
                <textarea name='comment' placeholder='Write comment here'></textarea>
                <Button />
            </form>
        </div>
    )
}

export default CommentForm;