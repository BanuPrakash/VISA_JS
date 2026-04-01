# JavaScript, TypeScript and React

```
    Repo: https://github.com/BanuPrakash/VISA_JS
    Softwares Required:
    1) Node.js 22+ LTS
    2) Chrome Web Browser   
    3) Visual Studio Code
```

JavaScript: loosely typed, dynamically typed event driven programming language.

string, number, boolean, array, object, function, undefined, null

var and let [2015 - ES 6 or ECMAScript2015]

var name = "Roger";
name.toUpperCase();

var age = 24; // number
age++; 

age = "Twenty Five"; 

In JS functions are also first-class members, treated similar to primitive and object.

var member; // undefined

var product = null;

function functionName(params){

}

```
    1) function add(x, y) {
        return x + y;
    }

    var res = add(4,5);

    2) function add(x, y) {
        console.log(x,y);
    }

    var res = add(4,5);

    value of res will be "undefined"

    3) function add(x, y) {
        return 
            x + y;
    }

    var result = add( 4, 5); // ?

    semi-colon insertion
    AST tree

    ESLint: static code analysis
```

Example :
```
    var g = 100;
    console.log("Hello");
    function doTask() {
        var a = 10;
        if(g > a ) {
            var b = 20;
            c = 30;
        }
        console.log(g, a, b, c)
    }
    doTask();
    console.log(g, a, b, c)
    console.log("Bye!");

```
JavaScript engine: V8 [ chrome, NodeJS], SpiderMonkey [ FireFox], Rhino , Nashorn [ Oracle Products], JavaScriptVM, Chakra, Continuum

"use strict";
Prevents Global Hoisting and passing "this" to a function

Example 2:
```
     console.log("Hello");

    function add(x, y) { return x + y; }

    setTimeout(function t1() {
        console.log("T1");
    }, 0);

    setTimeout(function t2() {
        console.log("T2");
    }, 0);
    Promise.resolve().then(function p1() {
        console.log("p1");
    });
     Promise.resolve().then(function p2() {
        console.log("p2");
    });
    add(4,5);
    
    console.log("Bye!!!");

```

Sample Thread:

```
 class TimerThread extends Thread {
    TimerThread(fn, int sleeTime, callbackQueue) {
        ...
    }

    public void run() {
        while(true) {
            Thread.sleep(sleepTime);
            callbackQueue.push(fn);
        }
    }
 }

class EventLoopThread extends Thread {
    public void run() {
        while(true) {
            if(stackIsEmpty) {
                for each fn in MicroTaskQueue
                    fn()
                end for
                 for each fn in MacroTaskQueue
                    fn()    
                end for
            }
        }
    }
}
```

https://www.jsv9000.app/


====

OOP in JS:

```
1) function constructor

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// instance method
Product.prototype.getName = function() {
    return this.name;
}
// instance method
Product.prototype.setPrice = function(p) {
    this.price = p;
}
var p1 = new Product("iPhone", 89000.00);
p1.setPrice(99999.99);

// static 
Product.equals = function (p1, p2) {
    return (p1.name === p2.name && p1.price === p2.price)
}
console.log(p1.name, p1.price);

var p2 = new Product("iPhone", 89000.00);

console.log(Product.equals(p1, p2));


Product("iPhone", 89000.00); // window name is iPhone, window price is 89000.00

2) JSON {} prefer this for data transfer


3) class

class Product {
    name;
    price;
    constructor(name = "", price = 0.0) {
        this.name = name;
        this.price = price;
    }

    setPrice(p) {
        this.price = p;
    }
}

https://caniuse.com/

```

function is an object of Function
Function inherits Object

let sub = new Function("x", "y" , "return x - y")

=====================





