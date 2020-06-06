'use strict';
const {server}=require('../lib/server');
const supertest=require('supertest');
const mockServer=supertest(server);


describe('products routes  ' , ()=>{
  it('should respond with 404 on an invalid route',()=>{
    return mockServer.get('/test').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
//   it('should respond with 404 on an invalid method',()=>{
//     return supertest.copy('/item').then((result)=>{
//       expect(result.status).toBe(404);
//     });
//   });
});