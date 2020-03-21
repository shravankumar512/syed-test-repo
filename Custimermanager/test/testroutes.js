const request = require('supertest');
const server = require('../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
describe('list Customer', () => {
  const agent = request.agent(server);

//var server = require('h:/student/src/routes/user.js');
it('should return JSON', function(done) {
  chai.request(server)
    .get('/Customer/getCustomer')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
describe('add Customer', () => {
  const agent = request.agent(server);
it('should add Customer', function(done) {
  chai.request(server)
    .post('/Customer/addCustomer')
    .send({name:'henrique',id:15,language:'english',release_date:'20-07-2017'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
describe('add Customer', () => {
  const agent = request.agent(server);
it('should add Customer', function(done) {
  chai.request(server)
    .put('/Customer/updateCustomer')
    .send({name:'henrique',id:15,language:'english',release_date:'20-07-2017'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
describe('add Customer', () => {
  const agent = request.agent(server);
it('should add movie', function(done) {
  chai.request(server)
    .post('/Customer/getCustomer')
    .send({name:'henrique',id:15,language:'english',release_date:'20-07-2017'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
