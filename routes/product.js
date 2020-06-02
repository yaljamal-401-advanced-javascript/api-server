const express = require('express');
const router = express.Router();
const product = require('../models/produtes-model.js');

//----------------------------products-----------------------------------
// add products
router.post('/products', (req, res, next) => {
  console.log('it adding ... ');
  product.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
});
//----------------------- get all products--------------------------------
router.get('/products', (req, res, next) => {
  console.log('get the productes ... ');
  product.get()
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
});

//---------- get the product when give the id for the product-------------
router.get('/products/:id', (req, res, next) => {
  console.log('geting the product ... ');
  product.get(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
});


//----- update the product when give the id for the categories-------------

router.put('/products/:id', (req, res, next) => {
  console.log('geting the product ... ');
  product.get(res.params.id)
    .then(data => product.update(res.params.id, data))
    .catch((err) => next(err.message));
});


//--------------delete the recourd from products------------------------
router.delete('/products/:id', (req, res, next) => {
  console.log('deleting the product ...');
  product.get(res.params.id)
    .then(data => product.delete(data))
    .catch(err => next(err.message));
});

module.exports = router;