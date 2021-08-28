import './UploadPage.scss';
import { Component } from 'react';
import UploadVideo from '../../components/UploadVideo/UploadVideo';

class UploadPage extends Component {
    render() {
        return (
            <section>
                <UploadVideo />
            </section>

        )
    }
}

export default UploadPage;