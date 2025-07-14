export default class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error("Invalid operation: dividing by zero !");
        }
        return a / b;
    }

    static sum(numbers) {
        return numbers.reduce((acc, n) => acc + n, 0);
    }

    static mean(numbers) {
        if (numbers.length === 0) {
            throw new Error("Invalid operation: empty array !");
        }
        let total = this.sum(numbers);
        return total / numbers.length;
    }

    static operations() {
        return ["add", "subtract", "multiply", "divide", "sum", "mean"];
    }

    static operation(name) {
        switch (name) {
            case "add":
                return { operation: "add", params: "int a, b", result: "integer" };
            case "subtract":
                return { operation: "subtract", params: "int a, b", result: "integer" };
            case "multiply":
                return { operation: "multiply", params: "int a, b", result: "integer" };
            case "divide":
                return { operation: "divide", params: "int a, b", result: "double" };
            case "sum":
                return { operation: "sum", params: "int array", result: "integer" };
            case "mean":
                return { operation: "mean", params: "int array", result: "double" };
            default:
                throw new Error(`Unknown operation '${name}'`);
        }
    }
}
