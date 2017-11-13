const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const config = require('./config/config');
const router = require('./routes/routes');

mongoose.connect(config.mongoUrl, () => {
    console.log('Db initialized!');
});

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use('/app', router);

app.listen(config.port, () => {
    console.log(`Nyan Nyan and Wouaf on port ${config.port}`);
});


