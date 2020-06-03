'use strict';
const express = require('express');
const products = require('../models/produtes-model.js');
const categories = require('../models/catogry-model.js');
const router = express.Router();

router.param('model', getModel);

function getModel(req, res, next) {
  const model = req.params.model;
  switch (model) {
  case 'categories':
    req.model=categories;
    next();
    return;     
  case 'products':
    req.model=products;
    next();
    return;
  default:
    next('Invaled Model');
    return;
  }
}

//-----------------Routs-------------------------------
router.get('/:model',getHandler);
router.get('/:model/:id',getByIdHandler);
router.post('/:model',postHandler);
router.put('/:model/:id',updateByIdHandler);
router.delete('/:model/:id',deleteHandler);

//-----------------getHandler-------------------------------

async function getHandler(req,res,next) { 
  try{
    console.log('hiiiiiiii',req.model);
    const data = await req.model.get();
    console.log('get',data);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}

//-----------------getByIdHandler-------------------------------
async function getByIdHandler(req,res,next) {
  const id=res.params.id;
  try{
    const data = await req.model.get(id);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}

//-----------------postHandler-------------------------------
async function postHandler(req,res,next) {
  try{
    const data = await req.model.create(res.body);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}

//-----------------updateByIdHandler-------------------------------
async function updateByIdHandler(req,res,next) {
  const id=req.params.id;
  try{
    const data = await req.model.update(id,req.body);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}
  
//-----------------deleteHandler-------------------------------
async function deleteHandler(req,res,next) {
  const id=req.params.id;
  try{
    const data = await req.model.delete(id);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}

module.exports=router;

