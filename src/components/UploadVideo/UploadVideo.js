import './UploadVideo.scss';
import UploadThumbnail from "./UploadThumbnail/UploadThumbail";
import Button from '../Button/Button'

const UploadVideo = () => {
    return (
        <section className='upload'>
            <div className='upload__container'>
                <h1 className='upload__title'>Upload Video</h1>
                <UploadThumbnail />
                <form className='upload__form'>
                    <h4 className='upload__subtitle'>TITLE YOUR VIDEO</h4>
                    <input className='upload__add-title' type='text' placeholder='Add a title to your video' />
                    <h4 className='upload__subtitle'>ADD A VIDEO DESCRIPTION</h4>
                    <textarea className='upload__add-description'>Add a description of your video</textarea>
                    <div>
                        <Button className='upload__publish-button' buttonType='PUBLISH'/>
                        <Button className='upload__cancel-button' buttonType='CANCEL'/>
                    </div>
                </form>
            </div>
        </section>
        

    )
}

export default UploadVideo;