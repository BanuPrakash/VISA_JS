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

