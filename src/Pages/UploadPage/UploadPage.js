import './UploadPage.scss';
import { Component } from 'react';
import UploadVideo from '../../components/UploadVideo/UploadVideo';

class UploadPage extends Component {
    render() {
        return (
            <body>
                <h1>Upload Page</h1>
                <UploadVideo />
            </body>

        )
    }
}

export default UploadPage;