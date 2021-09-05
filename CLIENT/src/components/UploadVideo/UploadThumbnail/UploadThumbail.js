import './UploadThumbnail.scss';

const UploadThumbnail = () => {
    return (
        <div className='thumbnail'>
            <h4 className='thumbnail__title'>VIDEO THUMBNAIL</h4>
            <img className='thumbnail__image' src='http://localhost:8000/images/Upload-video-preview.jpg' alt='video thumbnail' />
        </div>
    )
}

export default UploadThumbnail;