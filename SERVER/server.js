const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8080

app.use(express.json());
app.use(express.static('assets'));
app.use(cors());

const videoRoute = require('./routes/videos');
app.use('/videos', videoRoute)

// app.use((req, res, next) => {
//     if 
// })



app.listen(PORT, () => console.log('poop!'))