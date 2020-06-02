const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || 3000;

// port setup and listening 
http.listen(PORT, () => {
    console.log("listening on port " + PORT)
});

// serving our index.html 
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html")
    })
    app.get('/:id', (req, res) => {
        res.sendFile(__dirname + "/index.html")
    })
    // allows files in this folder to be served all the time
    app.use(express.static('public'));
