'use strict';
require('@code-fellows/supergoose');
const catogry = require('../models/catogry-model.js');
const obj = {
  name: 'electronices',
  description: 'electronices',
  display_name: 'electronices',
};
describe('catogry Modle ',()=>{
  it('create ()',()=>{
    return catogry.create(obj).then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get ()',()=>{
    return catogry.get().then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get(id)',()=>{
    return catogry.get(obj.id).then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('put(id)',()=>{
    let newObj={
      category: 'electronices',
      name: 'smart phone',
      display_name: 'iphone 11',
      description: '512 GB',
    };
    return catogry.get(obj.id).then((result)=>{
      catogry.update(result._id,newObj).then(record=>{
        Object.keys(record).forEach((keys)=>{
          expect(newObj[0][keys]).toEqual(result[keys]);
        });
      });
    });
  });

});