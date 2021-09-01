import './UploadThumbnail.scss';
import defaultThumbnail from '../../../assets/images/Upload-video-preview.jpg';

const UploadThumbnail = () => {
    return (
        <div className='thumbnail'>
            <h4 className='thumbnail__title'>VIDEO THUMBNAIL</h4>
            <img className='thumbnail__image' src={defaultThumbnail} alt='video thumbnail' />
        </div>
    )
}

export default UploadThumbnail;