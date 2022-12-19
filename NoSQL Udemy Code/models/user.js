const getDb = require('../util/database').getDb;
const mongoDb = require('mongodb');

class User{
  constructor(name, email,) {
    this.name = name;
    this.email = email;
  }

  save() {
    const db = getDb();

    return db
      .collection('users')
      .insertOne(this);
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
