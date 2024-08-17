const app = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');

app.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFleSync("/db/db.json")) || []
    res.json(db)

});

app.post('/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 9999)
    }
    db.push(newNote);
    fs.writeFleSync("/db/db.json", JSON.stringify(db), function (err) {
        if (err) throw err;
    })
    res.json(db)

});



module.exports = app