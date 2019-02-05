const express = require('express')

const port = 4000
const env = process.env.NODE_ENV

const app = express()
    .use(express.static(__dirname + '/templates'))
    .use('/static', express.static('public'))
    .get('/', (req, res) => {
        res.render("index.html")
    })

    .listen(port, function(err) {
        if (err) throw err;
        else {
            console.info(`Hy, Your ${env} server running on port ${port}`)
        }
    })  

