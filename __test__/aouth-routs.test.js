'use strict';

const { server } = require('../lib/server');
const supergose = require('@code-fellows/supergoose');
const mockRequest = supergose(server);

let data = { 'user_name': 'Ammar@hariry.com', 'password': '199483', 'role': 'Administrators' };

describe('Authentication Model', () => {
  it('POST to /signup to create a new user', () => {

    return mockRequest.post('/api/v1/signup')
      .send(data)
      .then(results => {
        expect(results.status).toBe(201);
      });
  });
  it('POST to /signup to create a new user', () => {

    return mockRequest.post('/api/v1/signup')
      .send(data)
      .then(results => {
        expect(results.status).toBe(403);
      });
  });
  it('POST  /category will cause error because it is producted', () => {
    let data = { name: 'test-cate', display_name: 'display-test-name', description: 'it is test' };
    return mockRequest.post('/api/v1/category')
      .send(data)
      .then(results => {
        expect(results.status).toBe(500);
      });
  });
  it('POST to /signin to pass an invalid username', () => {
    let data = { 'user_name': 'Ammarhariry.com', 'password': '199483' };

    return mockRequest.post('/api/v1/signin')
      .send(data)
      .then(results => {
        console.log('this is the hesder', results.headers);
        //       results.headers.authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhMjEyMTIxMTk5NCIsImNhcGFiaWxpdGllcyI6WyJSRUFEIiwiQ1JFQVRFIiwiVVBEQVRFIiwiREVMRVRFIl0sImlhdCI6MTU5MjA4Mzc3M30.5wBVjibPootoOoieJ5O4IBNhFEX68Fk6Zhn68DR1Mqc';
        expect(results.status).toBe(500);
      });
  });

  it('GET to /* to pass an invalid username', () => {
    return mockRequest.get('/*')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });
});