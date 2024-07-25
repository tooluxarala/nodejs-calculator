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
    static sum(a,b,c){
        return a+b+c;
    }
    static mean(a,b,c){
        return a+b+c/3;
    }
    static opertarion(add,subtract,multiply,divide,sum,mean){
        return add,subtract,multiply,divide,sum,mean;
    }
}
module.exports = Calculator;