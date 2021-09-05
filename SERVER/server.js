const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8000

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const videoRoute = require('./routes/videos');
app.use((req, res, next) => {
    if (req.method === 'POST' && !Object.keys(req.body).length) {
        return res.status(400).send('Need to add content')
    } next()
})

app.use('/videos', videoRoute)

app.listen(PORT, () => console.log('Listening!'))