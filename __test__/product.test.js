'use strict';
require('@code-fellows/supergoose');
const product = require('../models/produtes-model.js');
const obj = {
  category: 'electronices',
  name: 'camera',
  display_name: 'cannon',
  description: '25 MP',
};
describe('Product Modle ',()=>{
  it('create ()',()=>{
    return product.create(obj).then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get ()',()=>{
    return product.get().then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get(id)',()=>{
    return product.get(obj.id).then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  //   it('put(id)',()=>{
  //     let newObj={
  //       category: 'electronices',
  //       name: 'smart phone',
  //       display_name: 'iphone 11',
  //       description: '512 GB',
  //     };
  //     return product.get(obj.id).then((result)=>{
  //       product.update(result._id,newObj).then(record=>{
  //         Object.keys(record).forEach((keys)=>{
  //           expect(newObj[0][keys]).toEqual(result[keys]);
  //         });
  //       });
  //     });
  //   });

});