const http = require('http')
var url = require('url');

const server = http.createServer((req, res) => {

    var reqUrl = req.url;
    console.log(req.url)

    var path = req.url;
    var num = path.split('/');

    if(num[1] == 'add'){
        console.log('hi');
        var add = Number(num[2])+Number(num[3]);
        res.write(`${add}`);
        res.end()
    } 
    else if (num[1] == 'sub'){
        console.log('hello');
        var sub = Number(num[2])-Number(num[3]);
        res.write(`${sub}`);
        res.end()
    } else if (num[1] == 'mul'){
        console.log('helll');
        var mul = Number(num[2])*Number(num[3]);
        res.write(`${mul}`);
        res.end()
    } else if (num[1] == 'div'){
        console.log('heeeee');
        var div = Number(num[2])/Number(num[3]);
        res.write(`${div}`);
        res.end()
    }
  });

server.listen(8080)
