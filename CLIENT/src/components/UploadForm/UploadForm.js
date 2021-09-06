import './UploadForm.scss';
import UploadThumbnail from '../UploadThumbnail/UploadThumbail';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const UploadForm = ({ uploadHandler }) => {
    return (
        <form className='upload__form' onSubmit={uploadHandler}>
            <div className='upload__form-container'>
                <div className='upload__thumbnail-container'>
                    <UploadThumbnail />
                </div>
                <div className='upload__input-container'>
                    <h4 className='upload__subtitle'>TITLE YOUR VIDEO</h4>
                    <input className='upload__add-title' id='title' type='text' placeholder='Add a title to your video' />
                    <h4 className='upload__subtitle'>ADD A VIDEO DESCRIPTION</h4>
                    <textarea className='upload__add-description' id='description' placeholder='Add a description of your video'></textarea>
                </div>
            </div>
            <div className='upload__button-container'>
                <Button className='upload__publish-button' buttonType='PUBLISH'/>
                <div className='upload__cancel-button'>
                    <Link to='/' className='upload__cancel-button--link'>CANCEL</Link>
                </div>  
            </div>
        </form>
    )
}

export default UploadForm;