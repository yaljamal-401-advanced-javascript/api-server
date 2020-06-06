const express = require('express');
const categories = require('../models/catogry/catogry-model.js');
const products = require('../models/product/produtes-model.js');
const router = express.Router();
/**
* Module model
* @module router
*/

/**
 * getModel
 * @param   req
 * @param   res
 * @param   next
 */

router.param('model', getModel);

function getModel(req, res, next) {
  const model = req.params.model;
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid Model');
    return;
  }
}

router.get('/:model',getHandler);
router.get('/:model/:id',getByIdHandler);
router.post('/:model',postHandler);
router.put('/:model/:id',updateByIdHandler);
router.delete('/:model/:id',deleteByIdHandler);

/**
 * Function getHandler
 * @param   req
 * @param   res
 * @param   next
 */

async function getHandler(req,res,next){
  try{
    const data=await req.model.get();
    const result=data;
    const count=data.length;
    res.json({count, result});
  } catch(error){
    next(error.message);
  }
}

/**
 * Function getByIdHandler
 * @param   req
 * @param   res
 * @param   next
 */

async function getByIdHandler(req,res,next){
  const id=req.params.id;
  try{
    const data=await req.model.get(id);
    res.json(data);
  }catch(error){
    next(error.message);
  }
}
/**
 * Function getByIdHandler
 * @param   req
 * @param   res
 * @param   next
 */

async function postHandler(req,res,next){
  try{
    const data=await req.model.create(req.body);
    res.json(data);
  }catch (error){
    next(error.message);
  }
}
/**
 * Function getByIdHandler
 * @param   req
 * @param   res
 * @param   next
 */

async function updateByIdHandler(req,res,next) {
  const id=req.params.id;
  try{
    const data=await req.model.update(id,req.body);
    res.json(data);
  }catch(error){
    next(error.message);
  }
}
/**
 * Function getByIdHandler
 * @param   req
 * @param   res
 * @param   next
 */

async function deleteByIdHandler(req,res,next) {
  const id=req.params.id;
  try{
    await req.model.delete(id);
    res.json({});
  }catch(error){
    next(error.message);
  }
}
module.exports=router;