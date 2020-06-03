'use strict';
const express = require('express');
const cors=require('cors');
const morgan=require('morgan');
const router=require('../routes/router.js');

const log=require('./logger.js');
const timestamp=require('./timestamp.js');
const notFound=require('./404.js');
const serverError=require('./500.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(timestamp);
app.use(log);
app.use(morgan('dev'));

app.use('/api/v1',router);


app.use('*',notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};