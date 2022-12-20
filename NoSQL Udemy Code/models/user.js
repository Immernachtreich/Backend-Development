const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [
            { 
                productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true},
                quantity: { type: Number, required: true}
            }
        ]
    }
});

module.exports = mongoose.model('Users', userSchema)

// const getDb = require('../util/database').getDb;
// const mongoDb = require('mongodb');

// class User{
//   constructor(name, email, cart, _id) {
//     this.name = name;
//     this.email = email;
//     this.cart = cart; // { items: [] }
//     this._id = _id;
//   }

//   save() {
//     const db = getDb();

//     return db
//       .collection('users')
//       .insertOne(this);
//   }

//   addToCart(product) {

//     const cartProductIndex = this.cart.items.findIndex(cp => {
//       return cp.productId.toString() === product._id.toString();
//     });

//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];

//     if(cartProductIndex >= 0) {
//       newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       updatedCartItems[cartProductIndex].quantity = newQuantity;
//     } else {
//       updatedCartItems.push({ productId: new mongoDb.ObjectId(product._id), quantity: 1 });
//     }

//     const updatedCart = { items: updatedCartItems };

//     const db = getDb();
//     return db
//       .collection('users')
//       .updateOne(
//         { _id: new mongoDb.ObjectId(this._id) },
//         {$set: { cart: updatedCart } }
//       );
//   }

//   getCart() {
//     const db = getDb();
//     const productIds = this.cart.items.map(i => i.productId);

//     return db
//       .collection('products')
//       .find({ _id: { $in: productIds } })
//       .toArray()
//       .then(products => {
//         return products.map(p => {
//           return {
//             ...p, 
//             quantity: this.cart.items.find(i => i.productId.toString() === p._id.toString()).quantity}
//         })
//       })
//   }

//   deleteItemFromCart(productId) {
//     const updatedCartItems = this.cart.items.filter(item => {
//       return item.productId.toString() !== productId.toString();
//     });

//     const db = getDb();
//     return db
//       .collection('users')
//       .updateOne(
//         { _id: new mongoDb.ObjectId(this._id) },
//         { $set: { cart: { items: updatedCartItems } } }
//       );
//   }

//   addOrder() {
//     const db = getDb();

//     return this
//       .getCart()
//       .then(products => {
//         const order = {
//           items: products,
//           user: {
//             _id: this._id,
//             name: this.name
//           }
//         };

//         return db.
//           collection('orders')
//           .insertOne(order);
//       })
//       .then(result => {
//         this.cart = {items: []};

//         return db
//           .collection('users')
//           .updateOne(
//             { _id: new mongoDb.ObjectId(this._id) },
//             { $set: { cart: { items: [] } } }
//           );
//       });
//   }

//   getOrders() {
//     const db = getDb();

//     return db
//       .collection('orders')
//       .find({ 'user._id': new mongoDb.ObjectId(this._id) })
//       .toArray()
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection('users')
//       .findOne({ _id: new mongoDb.ObjectId(prodId) })
//       .then(user =>  user)
//       .catch(err => console.log(err));
//   }

  
// }

// module.exports = User;
