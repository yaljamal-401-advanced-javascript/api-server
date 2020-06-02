'use strict';
const schema=require('../models/product-schema.js');
const Model=require('../models/model.js');
class Product extends Model{
  constructor(){
    super(schema);
  }
}
module.exports=new Product();