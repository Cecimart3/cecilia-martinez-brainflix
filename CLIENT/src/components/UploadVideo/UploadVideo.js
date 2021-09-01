import './UploadVideo.scss';
import UploadThumbnail from "./UploadThumbnail/UploadThumbail";
import Button from '../Button/Button';
import { Link, Redirect } from 'react-router-dom';
import { Component } from 'react';

class UploadVideo extends Component {
    state = {
        published: false
    }

    uploadHandler = (e) => {
        e.preventDefault();
        alert('Your video uploaded successfully!');
        this.setState({
            published: true
        });
    }

    render() {
        return (this.state.published ? <Redirect to='/' /> : (
        <section className='upload'>
            <div className='upload__container'>
                <h1 className='upload__title'>Upload Video</h1>
                <form className='upload__form' onSubmit={this.uploadHandler}>
                    <div className='upload__form-container'>
                        <div className='upload__thumbnail-container'>
                            <UploadThumbnail />
                        </div>
                        <div className='upload__input-container'>
                            <h4 className='upload__subtitle'>TITLE YOUR VIDEO</h4>
                            <input className='upload__add-title' type='text' defaultValue='Add a title to your video' />
                            <h4 className='upload__subtitle'>ADD A VIDEO DESCRIPTION</h4>
                            <textarea className='upload__add-description' defaultValue='Add a description of your video'></textarea>
                        </div>
                    </div>
                    <div className='upload__button-container'>
                        <Button className='upload__publish-button' buttonType='PUBLISH'/>
                        <div className='upload__cancel-button'>
                            <Link to='/' className='upload__cancel-button--link'>CANCEL</Link>
                        </div>  
                    </div>
                </form>
            </div>
        </section>
    ))}
}

export default UploadVideo;