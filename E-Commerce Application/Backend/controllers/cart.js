const Cart = require('../models/cart.js');

const ITEMS_PER_PAGE = 2;

exports.postAddProduct = (req, res, next) => {

    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    Cart
        .findByPk(id)
        .then((product) => {

            if(product) {
                
                // let quantity = product.quantity;
                // quantity++;

                // Cart
                //     .update({quantity: quantity}, { where: { id: id } } )
                //     .then(() => {

                //         res.json({alreadyExisting : true, quantity: quantity});
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     })
                
                res.json({alreadyExisting : true});
            }
            else {

                Cart
                    .create({
                        id: id,
                        title: title,
                        imageUrl: imageUrl,
                        price: price,
                        quantity: 1
                    })
                    .then((data) => {
                        res.json({alreadyExisting : false});
                    }) 
                    .catch(err => {
                        console.log(err);
                    })
            }
        })
        .catch(err => console.log(err))
}

exports.getProducts = (req, res, next) => {

    const pageNumber = req.query.page;
    let totalProducts;

    Cart.
        count()
        .then((numberOfProducts) => {

            totalProducts = numberOfProducts;

            return Cart.findAll({
                    offset: (pageNumber - 1) * ITEMS_PER_PAGE,
                    limit: ITEMS_PER_PAGE
                })
        })
        .then((cartItems) => {

            const dataOfProducts = {
                cartItems: cartItems,

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
}

exports.deleteProduct = (req, res, next) => {
    const id = req.params.id;
    
    Cart
        .findByPk(id)
        .then((result => {
            return result.destroy();
        }))
        .then((response) => {
            res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
}