const Cart = require('../models/cart.js');

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

    Cart
        .findAll()
        .then((products) => {
            res.json(products);
        })
        .catch(err => console.log(err))
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