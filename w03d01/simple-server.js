const http = require('http'); // CommonJS Syntax
// import http from 'http'; ==> ES5

const server = http.createServer((request, response) => {
  const incomingRequest = `${request.method} ${request.url}`;
  console.log('incoming request', incomingRequest);

  if (incomingRequest === 'GET /blogposts') {
    response.write('these are the blog posts!');
    response.end();
  } else if (incomingRequest === 'GET /users') {
    response.write('here are all of the users!');
    response.end();
  } else {
    response.write('hello there!');
    response.end();
  }
});

const port = 12345;
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
