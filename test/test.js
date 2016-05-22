const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP)
const request = chai.request
const Router = require('../lib/router.js');
const router = new Router();

require('../test/test_server.js')

describe('Testing GET request', () => {
  it('should give text on /pokemon', (done) => {
    request('localhost:3000')
    .get('/pokemon')
    .end((err,res) => {
      expect(err).to.eql(null);
      expect(res.text).to.eql('Here is a pikachu')
      done();
    })
  })
})

describe('Testing POST request',()=> {
 it('should ',(done)=> {
   request('localhost:3000')
   .post('/pokemon')
   .end((err,res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('Added new pokemon');
     done();
   })
 });
});

describe('Testing PUT request',()=> {
 it('should ',(done)=> {
   request('localhost:3000')
   .put('/pokemon')
   .end((err,res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('You updated pokemon list');
     done();
 });
});
});

describe('Testing DELETE request',()=> {
 it('should ',(done)=> {
   request('localhost:3000')
   .delete('/pokemon')
   .end((err,res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('Deleted pokemon');
     done();
 });
});
});
describe('Testing PATCH request', ()=> {
 it('should ',(done)=> {
   request('localhost:3000')
   .patch('/pokemon')
   .end((err,res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('You modified the pokemon list');
     done();
 });
});
});
