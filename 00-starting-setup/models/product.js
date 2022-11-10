const db = require('../util/database.js')

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // Returns a Promise with the sql data inserted
    return db.execute(
        'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.description, this.imageUrl]
      );
  }

  static deletebyId(id) {
    return db.execute('DELETE FROM products WHERE products.id = ?',[id]);
  }
  static fetchAll() {

    // Returns a promise containing the sql data
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute(
      'SELECT * FROM products WHERE products.id = ?',
      [id]);
  }
};
