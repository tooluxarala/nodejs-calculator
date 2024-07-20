const { createServer } = require('node:http');

const url = require('url');

const Calculator = require('./calculator.js');
const { buffer } = require('stream/consumers');

console.log("Add: 2 + 3 = " + Calculator.add(2, 3))

console.log("Sub: 7 - 3 = " + Calculator.subtract(7, 3))

console.log("Mul: 5 x 3 = " + Calculator.multiply(5, 3))

console.log("Div: 9 / 3 = " + Calculator.divide(9, 3))

//console.log("Div: 9 / 0 = " + Calculator.divide(9, 0))

const processOperation = (pathname, params) => {
    let a = parseInt(params.a);
    let b = parseInt(params.b);
    let operationResult = {
        "operation": pathname.substring(1),
        params
    };
    if (pathname === '/add') {
        operationResult.result = Calculator.add(a, b);
    } else if (pathname === '/subtract') {
        operationResult.result = Calculator.subtract(a, b);
    } else if (pathname === '/multiply') {
        operationResult.result = Calculator.multiply(a, b);
    } else if (pathname === '/divide') {
        operationResult.result = Calculator.divide(a, b);
    } else {
        throw new Error("Innvalid operation '" + operationResult.operation + "'");
    }
    return operationResult;
}


const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');
    // Note: This is for debuging purpose
    //console.log('parsedUrl: ' + JSON.stringify(parsedUrl))

    if (req.method === 'POST') {
        let body = [];
        req.on('error', err => {
            console.error(err);
            res.statusCode = 400
            res.end("Error getting request body: " + err)
        }).on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            // At this point, we have the headers, method, url and body, and can now
            // do whatever we need to in order to respond to this request.

            try{

                let params = JSON.parse(body)

                let result = processOperation(parsedUrl.pathname, params)
    
                res.statusCode = 200
    
                res.end(JSON.stringify(result))
            } catch(error){
                console.log("Failed processing request: " + error );
                res.statusCode = 400;
                res.end("Failed processing request: " + error);
            }
        });

    } else {
        res.statusCode = 404 // Not found
        res.end('Not found')
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});