const app = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');

app.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)

});

app.post('/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 9999)
    }
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
        if (err) throw err;
    })
    res.json(db)

});

app.delete('/notes/:id', (req, res) => {
     let tempdb = db.filter(note => {
        if(note.id != req.params.id){
            return note
        }
    })
     console.log(tempdb)
    db = tempdb
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
        if (err) throw err;
    })
    res.json(db)

});


module.exports = app