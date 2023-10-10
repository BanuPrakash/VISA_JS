# JavaScript Stack
```
Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/VISA_JS


Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS
```

HTML + CSS + JS

Presentation + Decoration + Dynamic

HTML & CSS --> w3schools

JavaScript
Scripting language, loosely typed and dynamically typed language.

JS Code [ file.js] --> JavaScript engine

JavaScript engines:
1) V8 --> Goole --> Chrome Browser / NodeJS
2) SpiderMonkey --> FireFox
3) JavaScriptVM --> Opera
4) Nashorn --> Oracle
5) Rhino --> Mozilla
...

JS version 5 / ECMAScript 5

String, number, boolean, object, array, undefined, null


var --> to declare a variable

var name = "Roger"; //string

var age = 34; //number
age++;

age = "Thirty Five"; // string

age.toUpperCase();

var data; // undefined


-------------

file.js

```

"use strict"
var g = 10;

function doTask() {
    var a = 20;

    if(a > g) {
        var b = 30;
        c = 40;
    }

    console.log(g, a, b, c);
}

doTask();
console.log(g,  c);

```


=======================

JavaScript is event driven.

file.js
```
console.log("Hello");

setInterval(function timed() {
    console.log("timed!!!");
}, 1000);

$.on("click", function clicked() {
    console.log("clicked");
});
console.log("Bye");


setInterval --> timed(), 1000


class TimerThread extends Thread {
    TimerThread(CallbackQueue queue, Method m, int interval) {
        ...
    }

    void start() {
        while(true) {
            Thread.sleep(interval);
            queue.push(m);
        }
    }
}
```

https://www.jsv9000.app/

```

console.log("Hello");

setTimeout(function timed1() {
    console.log("timed1");
}, 1000);

setTimeout(function timed2() {
    console.log("timed2");
}, 1000);

console.log("Bye");
```

Steps:

npx create-react-app someapp
cd someapp
npm start

------
```
1) 
// returns a number
function add(x, y) {
    return x + y;
}

var result = add(4,5); // 9

2)
// returns undefined
function add(x, y) {
    console.log(x + y);
}
var result = add(4,5); // undefined

3) 
function add(x, y) {
    return 
        x + y;
}

var result = add(4,5); // undefined
```
OOP with JS

1) Object

var obj = new Object();
obj.name = "Tim";
obj.age = 32;

2) Using Function Constructor
```

Class Owned instance methods:

// name and age are state
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//adding behaviour
Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getAge = function() {
    return this.age;
}

Person.prototype.setAge = function(age) {
    this.age = age;
}
// static function
Person.equals = function(p1, p2) {
    return (p1.name === p2.name) && (p1.age === p2.age);
}
var p1 = new Person("Roger", 19);

var p2 = new Person("Yanni", 89);

if(Person.equals(p1, p2)) {

}
Person("Rita", 22); // ? --> modifies attributes of "global/window" object


Object owned instance methods:
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.setAge = function(age) {
        this.age = age;
    }
    this.getAge = function() {
        return this.age;
    }
}
```

3) JSON
JavaScript Object Notation {}

key is a string, value can be string, number, object, boolean, null, array, function

```
var person = {
    "name": "Kevin",
    "age": 25,
    getName: function() {
        return this.name;
    },
    setAge: function(age) {
        this.age = age;
    },
    getAge: function() {
        return this.age;
    }
}

person.setAge(44);
console.log(person.getName(), person.getAge());

```
https://addyosmani.com/learning-jsdp/

=====

every "function" inherits for "Object"

function add(x, y) {
    return x + y;
}
//var add = new Function("x", "y", "return x + y")

this is an instance of "Function" extends "Object"

===
Bind
```
var person = {
    "name": "Kevin",
    "age": 25,
    getName: function() {
        return this.name;
    }
}

var ref = person.getName;

ref();

var ref2 = person.getName.bind(person);
ref2();
```
call()  and apply() 
```
function update(name) {
    this.name = name;
}

var book = {
    name : "JS in Action",
    price: 890.00
}

var person = {
    name : "Peter",
    age: 53
}

update.call(book, 'React Ref');

update.call(person, 'Beena');
```

Day 2

Functional Style of Programmig using High Order Functions [ HOF ]
* functions which accept function as argument
* function returns a function

* forEach(), map(), filter(), reduce(), skip(), limit()
rxmarbles
map --> transform
filter --> subset
reduce() ==> aggregate




