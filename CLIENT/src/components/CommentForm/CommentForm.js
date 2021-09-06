import './CommentForm.scss';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const CommentForm = ({ selectedVideo }) => {
    const commentFormHandler = (e) => {
        e.preventDefault();
        e.target.reset()
    }
    return (
        <div className='comment-form'>
            <h3>{selectedVideo.comments.length} Comments</h3>
            <div className='comment-form__form-container'>
                <div className='comment-form__icon'>
                    <Icon />
                </div>
                <form className='comment-form__form' onSubmit={commentFormHandler}>
                    <h5 className='comment-form__title'>JOIN THE CONVERSATION</h5>
                    <div className='comment-form__input'>
                        <textarea className='comment-form__text-area' name='comment' placeholder='Write comment here'></textarea>
                        <Button className='comment-form__button' buttonType='COMMENT'/>
                    </div>
   
                </form>
            </div>
        </div>
          
    )
}

export default CommentForm;