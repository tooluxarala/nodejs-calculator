# Calculatrice

## I. Logique combinatoire

### 1 - créer un fichier calculator.js avec une méthode de classe Calculator.add(a, b) qui permet d'ajouter deux nombres entiers

### 2 - créer un fichier server.js et importer la classe 'Calculator'.

- Ajouter le message console.log("Add: 2 + 3 = " + calculator.add(2, 3))
- Lancer le programme avec ``node server.js``. Vous devriez voir le message:
  ``'Add: 2 + 3 = 5'``

### 3 - Ajouter une méthode Calculator.subtract(a,b) qui permet de faire la différence entre deux nombres entiers

- Ajouter dans server.js le message console.log("Sub: 7 - 3 = " + calculator.subtract(7, 3))
- Lancer le programme avec ``node server.js``. Vous devriez voir le message:
  ``'Sub: 7 - 3 = 4'``

### 4 - Ajouter une méthode Calculator.multiply(a,b) qui permet de faire la multiplication entre deux nombres entiers

- Ajouter dans server.js le message console.log("Mul: 5 x 3 = " + calculator.multiplt(5, 3))
- Lancer le programme avec ``node server.js``. Vous devriez voir le message:
  ``'Mul: 5 x 3 = 15'``

### 5 - Ajouter une méthode Calculator.divide(a,b) qui permet de faire la division entre deux nombres entiers

- Ajouter dans server.js le message console.log("Div: 9 / 3 = " + calculator.divide(9, 3))
- Lancer le programme avec ``node server.js``. Vous devriez voir le message:
  ``'Div: 9 / 3 = 3'``

## II Micro-service de calcul

### 1 - créer un endpoint REST POST avec le module Http /add qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.add(a, b)

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
      "operation": "add",
      "params": {
        "a": 2,
        "b": 3
      },
      "result": 5
  }
```

### 2 - créer un endpoint REST POST avec le module Http /subtract qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.subtract(a, b)

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
       "operation": "subtract",
       "params": {
           "a": 7,
           "b": 3
       },
       "result": 4
   }

```

### 3 - créer un endpoint REST POST avec le module Http /multiply qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.multiply (a, b)

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
       "operation": "multiply",
       "params": {
           "a": 7,
           "b": 3
       },
       "result": 4
   }
```

### 4 - créer un endpoint REST POST avec le module Http /divide qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.divide (a, b)

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
        "operation": "divide",
        "params": {
            "a": 9,
            "b": 3
        },
        "result": 3
  }
```

## III. Approfondissement (devoir maison)

### 1 - créer le endpoint REST POST /sum qui utilise Calculator.sum([termes]) et permet d’ajouter les éléments d’une liste envoyé en paramètre

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
 ```
  {
        "operation": "sum",
        "params": [
            2,
            3,
            5
        ],
        "result": 10
    }
 ```

### 2 – créer le endpoint REST POST /mean qui utilise Calculator.mean([termes]) et permet de calculer la moyenne des éléments d’une liste envoyé en paramètre selon leur signe

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
        "operation": "mean",
        "params": [
            7,
            -3,
            5
        ],
        "result": 3
  }
```

### 3 - créer le endpoint REST GET /operations qui utilise Calculator.operations() et permet de retourner une liste des opérations supportées par la calculatrice

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
 ```
  [
      "add",
      "subtract",
      "multiply"
      "divide",
      "sum",
      "mean"
  ]
 ```

### 4 - créer le endpoint REST GET /operations/:name qui utilise Calculator.operation(name) et permet de retourner les informations sur une operation donnée

- Lancer le programme avec ``node server.js``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
 ```
 # GET /operations/add
 {
      "operation": "add"
      "params": "int a, b"
      "result": "integer"
  }

  # GET /operations/sum
 {
      "operation": "sum"
      "params": "int array"
      "result": "integer"
  }

  # GET /operations/mean
 {
      "operation": "mean"
      "params": "int array"
      "result": "double"
  }
 ```

## IV. Ajout du gestionnaire de paquets/dépendances NPM

### 1 - Ajouter NPM au projet 
- Executer la commande ``npm init`` :
```
package name: (nodejs-calculator) 
version: (1.0.0) 
description: A Node.js calculator API
entry point: server.js
test command: 
git repository: 
keywords: Node.js, Math
author: Toolu Xarala
license: (ISC) Apache-2.0

```
- Vérifier que le fichier ``package.json`` est créé avec les bonnes valeurs
```
{
  "name": "nodejs-calculator",
  "version": "1.0.0",
  "description": "A Node.js calculator API",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [
    "Node.js",
    "Math"
  ],
  "author": "Toolu Xarala",
  "license": "Apache-2.0"
}
```
- Vérifier également que le fichier ``package-lock.json`` est bien créée. Ce fichier est généré et gèré par NPM donc pas besoin d'y toucher. Il contient toute la hiérachie des dépendances et doit être commité sur Git.

- lancer le programme avec ``npm start``
- Vérifier que le programme est bien lancé en testant tous les endpoints précédemment créés

### 2 - Ajouter la librairie Nodemon en mode developpement pour faire du hot-reloading
- Documentation: https://github.com/remy/nodemon#nodemon
- Executer la commande ``npm install nodemon --save-dev``
- Vérifier que la dépendance de développement ``nodemon``est bien créée dans le fichier ``package.json``:
```
 "devDependencies": {
    "nodemon": "^3.1.4"
  }

```
- Vérifier que le dossier des dépendances ``node_modules`` est bien créé et contient ``Nodemon``. Ce dossier est créé et gèré par NPM, donc pas besoin d'y toucher. C'est un dossier à ne surtout pas commiter dans Git. 
- Modifier le start script pour utiliser ``Nodemon`` :
```
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "nodemon server.js"
  }
```
- lancer le programme avec ``npm start`` 
- Ajouter le log ``console.log("New log before start !")`` dans le fichier ``server.js`` après la ``ligne 21`` et enregistrer.
- Vérifier que le programme redémare automatiquement dans le terminal. Le nouveau log doit apparaître dans le terminal.

### 3 - Ajouter la librairie monment.js pour calculer le temps de démarrage du server
- Documentation: https://momentjs.com/docs/
- Executer la commande ``npm install moment``
- Vérifier que la dépendance ``moment`` est bien créée dans le fichier ``package.json``:
```
  "dependencies": {
    "moment": "^2.30.1"
  }

```
- Ajouter ce code snippet au début du fichier ``server.js``:

```
const moment = require('moment')

let start = moment.now();

```
- Ajouter/Mettre à jour ce code snippet à la fin du fichier ``server.js``:

```
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    let end = moment.now()
    let startupTimeMilis = end - start
    console.log("Started server in " + (startupTimeMilis / 1000) + "s")
});

```
- Enregistrer le fichier. Vérifier que le log de démarrage ``"Started server in ...s"`` apparaît dans le terminal.