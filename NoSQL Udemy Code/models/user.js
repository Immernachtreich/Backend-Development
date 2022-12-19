const getDb = require('../util/database').getDb;
const mongoDb = require('mongodb');

class User{
  constructor(name, email, cart, _id) {
    this.name = name;
    this.email = email;
    this.cart = cart; // { items: [] }
    this._id = _id;
  }

  save() {
    const db = getDb();

    return db
      .collection('users')
      .insertOne(this);
  }

  addToCart(product) {

    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });

    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if(cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({ productId: new mongoDb.ObjectId(product._id), quantity: 1 });
    }

    const updatedCart = { items: updatedCartItems };

    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new mongoDb.ObjectId(this._id) },
        {$set: { cart: updatedCart } }
      );
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new mongoDb.ObjectId(prodId) })
      .then(user =>  user)
      .catch(err => console.log(err));
  }
}

module.exports = User;
