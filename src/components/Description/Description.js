import './Description.scss';
import videos from '../../assets/data/video-details.json';
import views from '../../assets/Icons/Icon-views.svg';
import likes from '../../assets/Icons/Icon-likes.svg';

const Description = () => {
    return (
        <div className='description'>
            <h1 className='description__title'>{videos[0].title}</h1>
            <div>
                <h3>By {videos[0].channel}</h3>
                <h4>{videos[0].timestamp}</h4>
            </div>
            <div>
                <div>
                    <img src={views} alt='views icon'/>
                    <h4>{videos[0].views}</h4>
                </div>
               <div>
                   <img src={likes} alt='like icon'/>
                    <h4>{videos[0].likes}</h4>
               </div>
            </div>
            <p>{videos[0].description}</p>
            
        </div>
    )
}

export default Description