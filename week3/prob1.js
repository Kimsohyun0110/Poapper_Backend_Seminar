const http = require('http')

const fs = require('fs');

require('date-utils');

var date = new Date();
var time = date.toFormat('YYYY-MM-DD HH24:MI:SS');
console.log(time);

const server = http.createServer((req, res) => {
  if(req.url == '/timer'){
    res.write(`${time}`);
    res.end()}
  });

server.listen(8080)
