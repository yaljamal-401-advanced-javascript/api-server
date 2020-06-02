'use strict';
const {server}=require('../lib/server.js');
const supertest=require('supertest');
const mockRequest=supertest(server);

describe('server ' , ()=>{
  it('should respond with 404 on an invalid route',()=>{
    return mockRequest.get('/item').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method',()=>{
    return mockRequest.copy('/item').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
//   it('should respond with 200 on on /categories',()=>{
//     return mockRequest.get('/categories').then((result)=>{
//       expect(result.status).toBe(200);
//     });
//   });
});