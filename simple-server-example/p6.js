const http = require("http");
const fs = require("fs");

function throwError(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("Not Found");
  res.end();
}

http
  .createServer(function (req, res) {
    if (req.url.toLocaleLowerCase() === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./index.html").pipe(res);
    } else if (req.url.toLocaleLowerCase() === "/home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./home.html").pipe(res);
    } else throwError(res);
  })
  .listen(8080);

console.log("Listning on 8080");
