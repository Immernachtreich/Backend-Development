const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoose = require('mongoose');

// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User
  // .findById('63a0924f6cfcba86154c258f')
  // .then(user => {
  //   req.user = new User(user.name, user.email, user.cart, user._id);
  //   next();
  // })
  // .catch(err => console.log(err));
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://admin:Chickoo11@cluster0.8kpvn6a.mongodb.net/shop')
  .then(result => {
    console.log('Connected');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })