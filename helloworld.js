var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Hello World\n We know there is a lot going on. Stay strong and do what you must')
}).listen(3333)

// Console will print the message
console.log('Server running is in good standing')
