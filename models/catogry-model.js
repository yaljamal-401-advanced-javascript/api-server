'use strict';
const schema=require('../models/catogry-schema.js');
const Model=require('../models/model.js');

class Catogry extends Model{
  constructor(){
    super(schema);
  }
}
module.exports=new Catogry();