import axios from 'axios';

const brainflixUrl = `http://localhost:8000`;

const brainflixRequest = axios.create({
    baseURL: brainflixUrl,
    headers: {
        'Content-Type': 'application/json',
    }
})

const brainflixRequests = {
    getAllVideos: () => brainflixRequest.get(`/videos`),
    getCurrentVideo: (id) => brainflixRequest.get(`/videos/${id}`),
    postNewVideo: (data) => brainflixRequest.post('/videos', data)
}

export default brainflixRequests