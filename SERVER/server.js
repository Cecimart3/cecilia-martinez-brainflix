const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8080

app.use(express.json());
app.use(express.static('assets'));
app.use(cors());

const videoRoute = require('./routes/videos');
app.use('/videos', videoRoute)

const uploadRoute = require('./routes/upload')
app.use('/uploadpage', uploadRoute)

app.listen(PORT, () => console.log('poop!'))