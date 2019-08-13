var http = require("http");
var url = require("url");
var requestHandlers = require("./requestHandlers");

var handle = {"/": requestHandlers.start,
              "/start": requestHandlers.start,
              "/upload": requestHandlers.upload,
              "/show": requestHandlers.show,
             }

function start(handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    if (typeof handle[pathname] === 'function') {
      handle[pathname](response, request);
    } else {
      console.log("No request handler found for " + pathname);
      response.writeHead(404, {"Content-Type": "text/html"});
      response.write("404 Not found");
      response.end();
    }
        
  }

  server = http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
  return server
}

var server = start(handle);
exports.closeServer = function(){
  server.close();
};
