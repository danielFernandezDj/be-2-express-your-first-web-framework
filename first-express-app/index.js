// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello world, this is my first server!')
})

// Create a second route.
app.get('/second', function (req, res) {
    res.send('This is the second server!')
})

// Listen for connections.
app.listen(3000)
