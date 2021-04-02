const express = require('express');
const router = express.Router();
const {getProducts, getProductById} = require('../db/product-queries');

// const otherRouter = require('./more-routes/something');
// GET /products/pins/...
// router.use('/pins', otherRouter);

// GET /maps/7/pins/42
// router.get('/:id/pins/:pin_id', () => {});

// router-specific middleware
router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   res.redirect('/login');
  // }

  console.log('the product router has been called');
  next();

  // longrunningProcess().then(() => {
  //   next();
  // });
});

// GET /products/
router.get('/', (req, res) => {
  getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
