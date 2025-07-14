import { createServer } from 'node:http';
import url from 'url';
import Calculator from './calculator.mjs';
import moment from 'moment';

let start = moment.now();

console.log("Add: 2 + 3 = " + Calculator.add(2, 3));
console.log("Sub: 7 - 3 = " + Calculator.subtract(7, 3));
console.log("Mul: 5 x 3 = " + Calculator.multiply(5, 3));
console.log("Div: 9 / 3 = " + Calculator.divide(9, 3));
console.log("New log before start !");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'POST') {
        let body = [];
        req.on('error', err => {
            console.error(err);
            res.statusCode = 400;
            res.end("Error getting request body: " + err);
        }).on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            try {
                const params = JSON.parse(body);
                let result;

                if (pathname === '/add') {
                    result = {
                        operation: "add",
                        params,
                        result: Calculator.add(params.a, params.b)
                    };
                } else if (pathname === '/subtract') {
                    result = {
                        operation: "subtract",
                        params,
                        result: Calculator.subtract(params.a, params.b)
                    };
                } else if (pathname === '/multiply') {
                    result = {
                        operation: "multiply",
                        params,
                        result: Calculator.multiply(params.a, params.b)
                    };
                } else if (pathname === '/divide') {
                    result = {
                        operation: "divide",
                        params,
                        result: Calculator.divide(params.a, params.b)
                    };
                } else if (pathname === '/sum') {
                    result = {
                        operation: "sum",
                        params: params.terms,
                        result: Calculator.sum(params.terms)
                    };
                } else if (pathname === '/mean') {
                    result = {
                        operation: "mean",
                        params: params.terms,
                        result: Calculator.mean(params.terms)
                    };
                } else {
                    res.statusCode = 404;
                    res.end(JSON.stringify({ error: "Unknown POST endpoint" }));
                    return;
                }

                res.statusCode = 200;
                res.end(JSON.stringify(result));
            } catch (err) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: err.message }));
            }
        });

    } else if (req.method === 'GET') {
        if (pathname === '/operations') {
            res.statusCode = 200;
            res.end(JSON.stringify(Calculator.operations()));
        } else if (pathname.startsWith('/operations/')) {
            const opName = pathname.split('/')[2];
            try {
                const op = Calculator.operation(opName);
                res.statusCode = 200;
                res.end(JSON.stringify(op));
            } catch (err) {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: err.message }));
            }
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Unknown GET endpoint" }));
        }

    } else {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: "Method Not Allowed" }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    let end = moment.now();
    let startupTimeMilis = end - start;
    console.log("Started server in " + (startupTimeMilis / 1000) + "s");
});
