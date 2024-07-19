const { error } = require('console');
const Calculator = require('./calculator');

//console.log("Addition de : 5 + 10 = " + Calculator.add(5, 10));
//console.log("Soustraction de : 7 - 3 = " + Calculator.subtract(7, 3));
//console.log("Multipli de : 5 * 3 = " + Calculator.multipli(5, 3));
//console.log("division de : 9 / 3 = " + Calculator.div(9, 3));


const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'POST' && parsedUrl.pathname === '/add') {
        let body = '';
        req.on('error', error => {
            res.statusCode = 400;
            res.end('on arrive pas a lire le request body :' + error);

        });
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const params = JSON.parse (body);
            const a = parseInt(params.a);
            const b = parseInt(params.b);
            const result = Calculator.add(a, b);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ result: result }));
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});
const PORT = 3000;
server.listen(PORT, () => { console.log(`Server running at http://${hostname}: ${PORT}`); });