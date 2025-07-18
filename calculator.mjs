export default class Calculator {
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
}
