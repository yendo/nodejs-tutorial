var request = require('request');
var tutorial = require('../index.js')

describe('jasmine-node', function(){

  it("should respond with hello world", function(done) {
    request("http://localhost:8888/hello", function(error, response, body){
      expect(body).toEqual("404 Not found");
      done();
      tutorial.closeServer();
    });
  });
});
