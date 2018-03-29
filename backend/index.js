const http = require('http');
const port = 4000;

const requestHandler = (request, response) => {
  console.log(request.url);
}

const server = http.createServer(requestHandler);

server.listen(port, error => {
  if (error) {
    return console.log(error);
  }

  console.log(`server is listening on ${port}`);
})