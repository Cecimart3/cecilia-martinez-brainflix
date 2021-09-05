import './UploadVideo.scss';
import { Redirect } from 'react-router-dom';
import { Component } from 'react';
import brainflixRequests from '../../utilities/apiCalls';
import UploadForm from './UploadForm/UploadForm';

class UploadVideo extends Component {
    state = {
        published: false
    }

    uploadHandler = (e) => {
        e.preventDefault();
        //alert('Your video uploaded successfully!');
        const title = e.target.title.value;
        const description = e.target.description.value;

        brainflixRequests.postNewVideo({ title, description }).then(() => {
            console.log('Your video uploaded successfully!');
            this.setState({
                published: true
            });
        })
    }

    render() {
        return (this.state.published ? <Redirect to='/' /> : (
        <section className='upload'>
            <div className='upload__container'>
                <h1 className='upload__title'>Upload Video</h1>
                <UploadForm uploadHandler={this.uploadHandler} />
            </div>
        </section>
    ))}
}

export default UploadVideo;