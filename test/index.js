process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('/', () => {
   
/*
  * Test the /GET route
  */
  describe('GET /', () => {
      it('it should GET message', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });

});