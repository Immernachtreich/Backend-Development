const Product = require('../models/product');
const Cart = require('../models/cart.js');

exports.getProducts = (req, res, next) => {
  
  Product.fetchAll().then( ( [rows, fieldData] ) => {

    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });

  })
  .catch( err => { 
    console.log(err); 
  })
 
};

exports.getProduct = (req, res, next) => {

  const prodID = req.params.productID;

  Product.findById(prodID)
    .then( ([products, fieldData]) => {

      res.render('shop/product-detail', { 
        product: products[0],
        pageTitle: products.title,
        path: '/product'} );
    })
    .catch(err => {
      console.log(err);
    })

}

exports.getIndex = (req, res, next) => {

  Product.fetchAll().then( ( [rows, fieldData] ) => {

    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    })

  })
  .catch( err => { 
    console.log(err); 
  })
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodID = req.body.productId;
  Product.findById(prodID, (product) => {
    Cart.addProduct(prodID, product.price);
  })
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
