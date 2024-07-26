
const { createServer } = require('node:http');
const url = require('url');
const Calculator = require('./calculator.js');
const { buffer } = require('stream/consumers');

console.log("Add: 2 + 3 = " + Calculator.add(2, 3))

console.log("Sub: 7 - 3 = " + Calculator.subtract(7, 3))

console.log("Mul: 5 x 3 = " + Calculator.multiply(5, 3))

console.log("Div: 9 / 3 = " + Calculator.divide(9, 3))

//console.log("Div: 9 / 0 = " + Calculator.divide(9, 0))

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'POST') {
        let body = [];
        req.on('error', err => {
            console.error(err);
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Error getting request body: " + err }));
        }).on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            let params;
            try {
                params = JSON.parse(body);
            } catch (e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Invalid JSON" }));
                return;
            }

            const a = parseInt(params.a, 10);
            const b = parseInt(params.b, 10);

            if (isNaN(a) || isNaN(b)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Invalid numbers" }));
                return;
            }

            let result;
            if (parsedUrl.pathname === '/add') {
                result = { operation: "Add", params, result: Calculator.add(a, b) };
            } else if (parsedUrl.pathname === '/subtract') {
                result = { operation: "Subtract", params, result: Calculator.subtract(a, b) };
            } else if (parsedUrl.pathname === '/multiply') {
                result = { operation: "Multiply", params, result: Calculator.multiply(a, b) };
            } else if (parsedUrl.pathname === '/divide') {
                try {
                    result = { operation: "Divide", params, result: Calculator.divide(a, b) };
                } catch (e) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: e.message }));
                    return;
                }
            } else if (parsedUrl.pathname === '/sum') {
                result = { operation: "sum", params: params.terms, result: Calculator.sum(params.terms) };
            } else if (parsedUrl.pathname === '/mean') {
                result = { operation: "mean", params: params.terms, result: Calculator.mean(params.terms) };
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'Not found' }));
                return;
            }

            res.statusCode = 200;
            res.end(JSON.stringify(result));
        });
    } else if (req.method === 'GET') {
        if (parsedUrl.pathname === '/operations') {
            const operations = Calculator.operations();
            res.statusCode = 200;
            res.end(JSON.stringify(operations));
        } else if (parsedUrl.pathname.startsWith('/operations/')) {
            const operationName = parsedUrl.pathname.split('/').pop();
            const operationInfo = Calculator.operation(operationName);
            if (operationInfo) {
                res.statusCode = 200;
                res.end(JSON.stringify(operationInfo));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'Operation not found' }));
            }
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Not found' }));
        }
    } else {
        res.statusCode = 405; // Method Not Allowed
        res.end(JSON.stringify({ error: 'Use POST method' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
