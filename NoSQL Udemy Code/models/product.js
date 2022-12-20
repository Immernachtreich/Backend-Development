const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema);


// const getDb = require('../util/database').getDb;
// const mongoDb = require('mongodb');

// class Product {
//   constructor(title, price, description, imageUrl, _id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = _id ? new mongoDb.ObjectId(_id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if(this._id) {
//       // Update existing product
//       dbOp = db
//         .collection('products')
//         .updateOne({ _id: this._id }, { $set: this });

//     } else {
//       // Create new product
//       dbOp = db
//         .collection('products')
//         .insertOne(this);
//     }
//     return dbOp;
//   }

//   static findAll() {
//     const db = getDb();
//     return db
//       .collection('products') //Access Collecttion
//       .find() // Find All products from collection
//       .toArray() // Instead of MongoDB object we choose to convert it into an array
//       .then(products => {
//         return products
//       })
//       .catch(err => console.log(err));
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find({ _id: new mongoDb.ObjectId(prodId) })
//       .next()
//       .then(product => {
//         return product;
//       })
//       .catch(err => console.log(err))
//   }

//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//       .collection('products')
//       .deleteOne({ _id: new mongoDb.ObjectId(prodId) })
//       .then(() => console.log('Deleted'))
//       .catch(err => console.log(err));
//   }
// }

// module.exports = Product;
