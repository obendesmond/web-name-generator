const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err)); 

// server static assets if in production
if(process.env.NODE_ENV === 'production'){
    // set a static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
    })
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))