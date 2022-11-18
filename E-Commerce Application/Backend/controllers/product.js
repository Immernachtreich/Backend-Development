const Music = require('../models/music.js');
const Merch = require('../models/merch.js');

const ITEMS_PER_PAGE = 2;

exports.getMusic= (req, res, next) => {

    const pageNumber = req.query.page;
    let totalProducts;

    Music.
        count()
        .then((numberOfProducts) => {

            totalProducts = numberOfProducts;

            return Music.findAll({
                    offset: (pageNumber - 1) * ITEMS_PER_PAGE,
                    limit: ITEMS_PER_PAGE
                })
        })
        .then((musics) => {

            const dataOfProducts = {
                musics: musics,

                totalProducts: totalProducts,

                hasNextPage: (ITEMS_PER_PAGE * pageNumber) < totalProducts,
                hasPreviousPage: pageNumber > 1,

                nextPage: parseInt(pageNumber) + 1,
                currentPage: parseInt(pageNumber),
                previousPage: parseInt(pageNumber) - 1,

                lastPage: Math.ceil(totalProducts / ITEMS_PER_PAGE)
            }
            res.json(dataOfProducts);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getMerch= (req, res, next) => {

    const pageNumber = req.query.page;
    let totalProducts;

    Merch.
        count()
        .then((numberOfProducts) => {

            totalProducts = numberOfProducts;

            return Merch.findAll({
                    offset: (pageNumber - 1) * ITEMS_PER_PAGE,
                    limit: ITEMS_PER_PAGE
                })
        })
        .then((merches) => {

            const dataOfProducts = {
                merches: merches,

                totalProducts: totalProducts,

                hasNextPage: (ITEMS_PER_PAGE * pageNumber) < totalProducts,
                hasPreviousPage: pageNumber > 1,

                nextPage: parseInt(pageNumber) + 1,
                currentPage: parseInt(pageNumber),
                previousPage: parseInt(pageNumber) - 1,

                lastPage: Math.ceil(totalProducts / ITEMS_PER_PAGE)
            }
            res.json(dataOfProducts);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getProduct = (req, res, next) => {

    const id = req.params.id;

    if(id <= 999) {
        Music
            .findByPk(id)
            .then((music) => {
                res.json(music);
            })
            .catch(err => console.log(err))
    }
    else {

        Merch
            .findByPk(id)
            .then((merch) => {
                res.json(merch);
            })
            .catch(err => console.log(err))
    }
};