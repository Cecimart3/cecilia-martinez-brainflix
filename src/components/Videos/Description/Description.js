import './Description.scss';
import views from '../../../assets/Icons/Icon-views.svg';
import likes from '../../../assets/Icons/Icon-likes.svg';

const Description = ({ selectedVideo }) => {
    return (
        <div className='description'>
            <h1 className='description__title'>{selectedVideo.title}</h1>
            <div className='description__posted'>
                <h3 className='description__channel'>By {selectedVideo.channel}</h3>
                <h4 className='description__date'>{selectedVideo.timestamp}</h4>
            </div>
            <div className='description__counter'>
                <div className='description__views'>
                    <img className='description__views-icon' src={views} alt='views icon'/>
                    <h4 className='description__views-count'>{selectedVideo.views}</h4>
                </div>
               <div className='description__likes'>
                   <img  className='description__likes-icon' src={likes} alt='like icon'/>
                    <h4 className='description__likes-count'>{selectedVideo.likes}</h4>
               </div>
            </div>
            <p className='description__description'>{selectedVideo.description}</p> 
        </div>
    )
}

export default Description