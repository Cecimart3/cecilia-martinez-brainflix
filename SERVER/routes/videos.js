const router = require('express').Router();
const fs = require('fs');
const { url } = require('inspector');
const uuid = require('uniqid');

const getVideos = () => {
    const videoDetails = fs.readFileSync('./data/video-details.json');
    const videoDetailsParsed = JSON.parse(videoDetails);
    return videoDetailsParsed
}

const videoList = videos => 
    videos.map(video => ({
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image
    })
)

const currentVideo = videos => 
    videos.map(video => video.id)

router.get('/', (req, res) => {
    try {
        const videos = getVideos();
        return res.status(200).json(videoList(videos));
    } catch (error) {
        return res.status(500).json({ error: 'THIS SHIT DOESNT WORK'})
    }
})

router.get('/:id', (req, res) => {
    try {
        const videos = getVideos();
        const videosId = req.params.id;
        const videoIdFound = videos.find(video => video.id === videosId);

        if (videoIdFound) {
            res.status(200).json(videoIdFound)
        } 
    } catch (error) {
        return res.status(500).json({ error: 'DONT WATCH THIS SHIT'})
    }
})

const newVideo = (req) => ({
    id: uuid(),
    title: req.body.title,
    channel: 'Mohan',
    image: 'http://localhost:8000/images/Upload-video-preview.jpg',
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: 0,
    video: '',
    timestamp: Date.now(),
    comments: []
})
    

router.post('/', (req, res) => {
    const videos = getVideos();
    const video = newVideo(req);

    videos.push(video);

    fs.writeFileSync('./data/video-details.json', JSON.stringify(videos));

    return res.status(201).json(video);
})


module.exports = router;
