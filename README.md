 # Calculatrice

## I. Logique combinatoire
### 1 - créer un fichier calculator.js avec une méthode de classe Calculator.add(a, b) qui permet d'ajouter deux nombres entiers 
### 2 - créer un fichier server.js et importer la classe 'Calculator'.
    * Ajouter le message console.log("Add: 2 + 3 = " + calculator.add(2, 3))
    * Lancer le programme avec ``node server.js``. Vous devriez voir le message 'Add: 2 + 3 = 5'
### 3 - Ajouter une méthode Calculator.subtract(a,b) qui permet de faire la différence entre deux nombres entiers
    * Ajouter dans server.js le message console.log("Sub: 7 - 3 = " + calculator.subtract(7, 3)) 
    * Lancer le programme avec ``node server.js``. Vous devriez voir le message 'Sub: 7 - 3 = 4'
### 4 - Ajouter une méthode Calculator.multiply(a,b) qui permet de faire la multiplication entre deux nombres entiers
    * Ajouter dans server.js le message console.log("Mul: 5 x 3 = " + calculator.multiplt(5, 3))
    * Lancer le programme avec ``node server.js``. Vous devriez voir le message 'Mul: 5 x 3 = 15'
### 5 - Ajouter une méthode Calculator.divide(a,b) qui permet de faire la division entre deux nombres entiers
    * Ajouter dans server.js le message console.log("Div: 9 / 3 = " + calculator.divide(9, 3))
    * Lancer le programme avec ``node server.js``. Vous devriez voir le message 'Div: 9 / 3 = 3'

## II Micro-service de calcul

### 1 - créer un endpoint REST POST avec le module Http /add qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.add(a, b)
    * Lancer le programme avec ``node server.js``. 
    * Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
    ```{
        "operation": "Add",
        "params": {
            "a": 2,
            "b": 3
        },
        "result": 5
    }```
### 2 - créer un endpoint REST POST avec le module Http /subtract qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.subtract(a, b)
    * Lancer le programme avec ``node server.js``.
    * Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
    ```{
        "operation": "Sub",
        "params": {
            "a": 7,
            "b": 3
        },
        "result": 4
    }```
### 3 - créer un endpoint REST POST avec le module Http /multiply qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.multiply (a, b)
    * Lancer le programme avec ``node server.js``.
    * Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
    ```{
        "operation": "Sub",
        "params": {
            "a": 7,
            "b": 3
        },
        "result": 4
    }```
### 4 - créer un endpoint REST POST avec le module Http /divide qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.divide (a, b)
    * Lancer le programme avec ``node server.js``.
    * Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
     ```{
        "operation": "Div",
        "params": {
            "a": 9,
            "b": 3
        },
        "result": 3
    }```