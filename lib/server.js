'use strict';
const express = require('express');
const morgan=require('morgan');
const cors=require('cors');
const log=require('./logger.js');
const timestamp=require('./timestamp.js');
const notFound=require('./404.js');
const serverError=require('./500.js');
const product=require('../routes/product.js');
const category=require('../routes/category.js');
const app = express();
app.use(express.json());
app.use(timestamp);
app.use(log);
app.use(morgan('dev'));
app.use(cors());
//-----------------------products--------------------------
app.post('/products',product);
app.get('/products',product);
app.get('/products/:id',product);
app.put('/products/:id',product);
app.delete('/products/:id',product);


//-----------------------categories--------------------------
app.post('/categories',category);
app.get('/categories',category);
app.get('/categories/:id',category);
app.put('/categories/:id',category);
app.delete('/categories/:id',category);

app.use('*',notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};