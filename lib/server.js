'use strict';
// require('dotenv').cofgie();
let jsonData = require('../db.json');
const log=require('./logger.js');
const timestamp=require('./timestamp.js');
const notFound=require('./404.js');
const serverError=require('./500.js');

const express = require('express');
const app = express();
app.use(express.json(jsonData));
app.use(timestamp);
app.use(log);
// let data=JSON.parse(jsonData);

//----------------------------products-----------------------------------
// add products
app.post('/products', (req, res) => {
  console.log('it adding ... ', req.body);
  jsonData = {
    'category': req.body.category,
    'name': req.body.name,
    'display_name': req.body.display_name,
    'description': req.body.description,
    'id': req.body.id,
  };
  res.status(200).send('the product added :)');
});
//----------------------- get all products--------------------------------
app.get('/products', (req, res) => {
  console.log('get the productes ... ');
  console.log('our Productes are :', jsonData.products);
  res.status(200).json(jsonData.products);
});

//---------- get the product when give the id for the product-------------
app.get('/products/:id', (req, res) => {
  console.log('geting the product ... ', jsonData.products[0].id);
  let results = serchPro(jsonData, req.params.id);

  console.log('rrrrrrrrrrrrrrr', results);

  var newresult = Object.assign({}, results);
  console.log('rrrrrrrrrrrrrrr', newresult[0]);

  res.status(200).json(newresult[0]);
});


//----- update the product when give the id for the categories-------------

app.put('/products/:id', (req, res) => {
  console.log('geting the product ... ', jsonData.products[0].id);
  let results = serchPro(jsonData, req.params.id);

  console.log('rrrrrrrrrrrrrrr', results);

  var newresult = Object.assign({}, results);
  newresult = {

    'category': req.body.category,
    'name': req.body.name,
    'display_name': req.body.display_name,
    'description': req.body.description,
    'id': req.body.id,

  };
  console.log('After Edit ', newresult);

  res.status(200).json(newresult);
});


//--------------delete the recourd from products------------------------
app.delete('/products/:id', (req, res) => {
  console.log('deleting the product ...');
  console.log(jsonData.products[req.params.id]);
  delete jsonData.products[req.params.id];
  res.status(200).send(' the product is deleted ');
  console.log('deleted ');
});


//-----------------------------categories-------------------------------
//--------------------------- add categories----------------------------
app.post('/categories', (req, res) => {
  console.log('it adding ... ', req.body);
  jsonData = {

    'name': req.body.name,
    'description': req.body.description,
    'display_name': req.body.display_name,
    'id': req.body.id,

  };
  res.status(200).send('the categories added :)');
});
//--------------------- get all categories -----------------------------
app.get('/categories', (req, res) => {
  console.log('get the categories ... ');
  console.log('our categories are :', jsonData.categories);
  res.status(200).json(jsonData.categories);

});
//------- get the product when give the id for the categories ----------
app.get('/categories/:id', (req, res) => {
  console.log('geting the categories ... ', jsonData.categories[0].id);
  let results = serchCat(jsonData, req.params.id);

  console.log('rrrrrrrrrrrrrrr', results);

  var newresult = Object.assign({}, results);
  console.log('rrrrrrrrrrrrrrr', newresult[0]);

  res.status(200).json(newresult[0]);
});
//--------update the category when give the id for the categories--------

app.put('/categories/:id', (req, res) => {
  console.log('geting the category ... ', jsonData.categories[0].id);
  let results = serchCat(jsonData, req.params.id);

  console.log('rrrrrrrrrrrrrrr', results);

  var newresult = Object.assign({}, results);
  newresult = {

    'name': req.body.name,
    'description': req.body.description,
    'display_name': req.body.display_name,
    'id': req.body.id,

  };
  console.log('After Edit ', newresult);

  res.status(200).json(newresult);

});

//--------------delete the recourd from categories------------------------
app.delete('/categories/:id', (req, res) => {
  console.log('deleting the category ...');
  console.log(jsonData.categories[req.params.id]);
  delete jsonData.categories[req.params.id];
  res.status(200).send(' the category is deleted ');
  console.log('deleted ');

});

// -----------helper function to serch the product-------------- 
function serchPro(obj, id) {
  var results = [];
  var searchVal = id;
  for (var i = 0; i < obj.products.length; i++) {
    if (obj.products[i].id == searchVal) {
      results.push(obj.products[i]);

    }
  }
  return results;
}
//-------------helper function to serch the  categories----------
function serchCat(obj, id) {
  var results = [];
  var searchVal = id;
  for (var i = 0; i < obj.categories.length; i++) {
    if (obj.categories[i].id == searchVal) {
      results.push(obj.categories[i]);

    }
  }
  return results;
}
app.use('*',notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};