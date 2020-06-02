const express = require('express');
const router = express.Router();
const category = require('../models/catogry-model.js');
//-----------------------------categories-------------------------------
//--------------------------- add categories----------------------------
router.post('/categories', (req, res, next) => {
  console.log('it adding ... ', req.body);
  category.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err.message));
});
//--------------------- get all categories -----------------------------
router.get('/categories', (req, res, next) => {
  console.log('get the categories ... ');
  category.get()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err.message));

});
//------- get the category when give the id for the categories ----------
router.get('/categories/:id', (req, res, next) => {
  console.log('geting the categories ... ');
  category.get(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
});
//--------update the category when give the id for the categories--------

router.put('/categories/:id', (req, res, next) => {
  console.log('geting the category ... ');
  category.get(res.params.id)
    .then(data => category.update(res.params.id, data))
    .catch((err) => next(err.message));

});

//--------------delete the recourd from categories------------------------
router.delete('/categories/:id', (req, res, next) => {
  console.log('deleting the category ...');
  category.get(res.params.id)
    .then(data => category.delete(data))
    .catch(err => next(err.message));

});
module.exports = router;