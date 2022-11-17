const Music = require('../models/music.js');
const Merch = require('../models/merch.js');

exports.getMusic= ((req, res, next) => {

    Music
        .findAll()
        .then((musics) => {
            res.json(musics);
        })
        .catch(err => {
            console.log(err);
        })
})

exports.getMerch= ((req, res, next) => {

    Merch
        .findAll()
        .then((merches) => {
            res.json(merches);
        })
        .catch(err => {
            console.log(err);
        })
})