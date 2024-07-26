class Calculator {
    static add(a, b) {
        return a + b
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Invalid operation: dividing by zero !")
        }
        return a / b;
    }
    static sum(terms) {
        return terms.reduce((acc, curr) => acc + curr, 0);
    }

    static mean(terms) {
        if (terms.length === 0) return 0;
        return terms.reduce((acc, curr) => acc + curr, 0) / terms.length;
    }

    static operations() {
        return ["add", "subtract", "multiply", "divide", "sum", "mean"];
    }
    static operation(name) {
        const operations = {
            "add": { operation: "add", params: "int a, b", result: "integer" },
            "subtract": { operation: "subtract", params: "int a, b", result: "integer" },
            "multiply": { operation: "multiply", params: "int a, b", result: "integer" },
            "divide": { operation: "divide", params: "int a, b", result: "integer" },
            "sum": { operation: "sum", params: "int array", result: "integer" },
            "mean": { operation: "mean", params: "int array", result: "double" }
        };

        return operations[name] || null;
    }
}

module.exports = Calculator;