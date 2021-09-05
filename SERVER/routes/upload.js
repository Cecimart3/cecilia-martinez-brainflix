const router = require('express').Router();
const fs = require('fs');
const uuid = require('uniqueid');

const getVideos = () => {
    const videoDetails = fs.readFileSync('./data/video-details.json');
    const videoDetailsParsed = JSON.parse(videoDetails);
    return videoDetailsParsed
}

const newVideo = {
    id: uuid(),
    title: req.body.title,
    channel: 'Mohan',
    image: bike,
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: 0,
    video: '',
    timestamp: Date.now().toLocaleDateString(),
    comments: []
}
    

router.get('/', (req, res) => {
    const videos = getVideos();

    videos.push(newVideo);

    fs.writeFileSync('./data/video-details.json', JSON.stringify(videos));

    return res.status(201).json(newVideo);
})