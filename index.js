// implement your API here
const express = require('express')

const server = express()

const db = require('./data/db.js')

server.use(express.json());

server.listen(4000, () => {
    console.log('*** Server is listening on port 4000 ***');
})

//RETURNS ALL USERS
server.get('/api/users', (req, res) => {
    db.find()
    .then((user) => {
        res.status(200).json({
            message: user
        })
    })
    .catch((err) => {
        console.log(err)
        res.json({error: err})
    })
})
//

//RETURN USER BY ID
server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db.findById(id)
    .then((user) => {
        res.status(200).json({
            message: user
        })
    })
    .catch((err) => {
        console.log(err);
        res.json({error: err})
    })
})
//