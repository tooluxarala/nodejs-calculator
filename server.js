const Calculator = require('./calculator');

console.log("Soustraction de : 15 + 10 = " + Calculator.subtract(15, 10));
console.log("Multiplication de : 15 * 10 = " + Calculator.multiplication(15, 10));
console.log("Division de : 15 / 3 = " + Calculator.division(15, 3));

const { createServer } = require('node:http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    if (req.method === 'GET' && parseUrl.pathname === '/add'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log("Addition de : 5 + 10 = " + Calculator.add(5, 10));

        res.end("Addition de : 5 + 10 = " + Calculator.add(5, 10));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
