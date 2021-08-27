import axios from 'axios';

const brainflixUrl = `https://project-2-api.herokuapp.com`;
const apiKey = '?api_key=fef3a3d4-b378-400f-a640-d49ee991e01e';


const brainflixRequest = axios.create({
    baseURL: brainflixUrl
})

const brainflixRequests = {
    getAllVideos: () => brainflixRequest.get(`/videos/${apiKey}`),
    getCurrentVideo: (id) => brainflixRequest.get(`/videos/${id}/${apiKey}`),
}

export default brainflixRequests