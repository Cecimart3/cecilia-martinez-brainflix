import './Description.scss';
import postDate from '../../utilities/date';

const Description = ({ selectedVideo }) => {
    return (
        <div className='description'>
            <h1 className='description__title'>{selectedVideo.title}</h1>
            <div className='description__info'>
                <div className='description__posted'>
                    <h3 className='description__channel'>By {selectedVideo.channel}</h3>
                    <h4 className='description__date'>{postDate(selectedVideo.timestamp)}</h4>
                </div>
                <div className='description__counter'>
                    <div className='description__views'>
                        <img className='description__views-icon' src='http://localhost:8000/icons/Icon-views.svg' alt='views icon'/>
                        <h4 className='description__views-count'>{selectedVideo.views}</h4>
                    </div>
                    <div className='description__likes'>
                        <img  className='description__likes-icon' src='http://localhost:8000/icons/Icon-likes.svg' alt='like icon'/>
                        <h4 className='description__likes-count'>{selectedVideo.likes}</h4>
                    </div>
                </div>
            </div>
            <div className='description__description-container'>
                <p className='description__description'>{selectedVideo.description}</p> 
            </div>
        </div>
    )
}

export default Description