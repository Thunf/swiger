var http = require('http'),
  swig = require('../../index');

http.createServer(function (req, res) {
  var output = swig.compileFile(__dirname + '/page.html')();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(output);
}).listen(1337);

console.log('Application Started on http://localhost:1337/');
