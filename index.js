const express = require('express')

const app = express()
    .use(express.static(__dirname + '/templates'))
    .use('/static', express.static('public'))
    .get('/', (req, res) => {
        res.render("index.html")
    })

    .listen(4000, function(err) {
        if (err) throw err;
        else {
            console.info("Hy, Your server running on port 4000")
        }
    })  

