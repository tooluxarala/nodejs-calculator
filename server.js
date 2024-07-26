const http = require('http');
const Calculator = require('./calculator');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = JSON.parse(body);
            let result;

            switch (req.url) {
                case '/add':
                    result = Calculator.add(data.a, data.b);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({
                        operation: 'add',
                        params: { a: data.a, b: data.b },
                        result: result
                    }));
                    break;
                case '/subtract':
                    result = Calculator.subtract(data.a, data.b);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({
                        operation: 'subtract',
                        params: { a: data.a, b: data.b },
                        result: result
                    }));
                    break;
                case '/multiply':
                    result = Calculator.multiply(data.a, data.b);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({
                        operation: 'multiply',
                        params: { a: data.a, b: data.b },
                        result: result
                    }));
                    break;
                case '/divide':
                    result = Calculator.divide(data.a, data.b);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({
                        operation: 'divide',
                        params: { a: data.a, b: data.b },
                        result: result
                    }));
                    break;
                case '/sum':
                    result = Calculator.sum(data.terms);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({
                        operation: 'sum',
                        params: data.terms,
                        result: result
                    }));
                    break;
                case '/mean':
                    result = Calculator.mean(data.terms);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({
                        operation: 'mean',
                        params: data.terms,
                        result: result
                    }));
                    break;
                default:
                    res.writeHead(404, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ error: 'Not Found' }));
                    break;
            }
        });
    } else if (req.method === 'GET') {
        if (req.url === '/operations') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(Calculator.operations()));
        } else if (req.url.startsWith('/operations/')) {
            const operationName = req.url.split('/')[2];
            const operation = Calculator.operation(operationName);
            if (operation) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({
                    operation: operationName,
                    params: operation.params,
                    result: operation.result
                }));
            } else {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Operation Not Found' }));
            }
        } else {
            res.writeHead(405, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ error: 'Method Not Allowed' }));
        }
    } else {
        res.writeHead(405, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
