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

call and apply

update.call(person, "roger", 898992.44);
update.apply(person, ["roger", 89898.22]);
=====================

1) let introduced block level scope
2) arrow : Fat arrow
```
let add = (x,y) => x + y;
```
3) Destructuring:
```
    3.1) Arrays:
    let data = ["red", "green", "blue", "orange", "pink"];

    let [r, g, ...others] = data;

    console.log(r);
    console.log(others); // blue, orange and pink

    3.2) Object
    let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  let {email, phone : mobile, company} = user;
  console.log(email, mobile);

4) Clone
let data = [4,5,7,8,1];

let ref = data;
ref[0] = 100;
data[0] will also be 100

let copy = [...data];
copy[0] = 99;
data[0] is not changed

Note:
let newArray = [...data, 62]; clone data and push 62

5) Promise: for async operations [ like Callable and Future of Java]

5.1) if doTask is sync
function doTask() {

}

let res = doTask(); // blocking code

if doTask is async code
doTask().then(function (data) {
    // success, resolved
},
function (err) {
    // failure, reject
}
);

// lines here can continue to execute

6) async and await:
to prevent callback hell [nested callback]

app.post('/performAction', (req, res) => {
  authenticateUserPromise(req.body.username, req.body.password)
    .then((isAuthenticated) => {
      if (!isAuthenticated) {
        res.status(401).send('Authentication failed');
        return Promise.reject();
      }

      // Step 3: Check authorization level of user
      return checkAuthorizationPromise(req.body.username);
    })
    .then((isAuthorized) => {
      if (!isAuthorized) {
        res.status(403).send('User not authorized');
        return Promise.reject();
      }

      // Step 4: Perform the action
      return performActionPromise(req.body.actionData);
    })
    .then(() => {
      // Step 5: Send Notification E-mail
      return sendNotificationEmailPromise(req.body.username);
    })
    .then(() => {
      // Step 6: Send response back to the user browser
      res.status(200).send('Action performed successfully');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      res.status(500).send('An error occurred');
    });
});

Alternate with async and await:

app.post('/performAction', async (req, res) => {
  try {
    // Step 2: Authenticate the user
    const isAuthenticated = await authenticateUserPromise(req.body.username, req.body.password);

    if (!isAuthenticated) {
      res.status(401).send('Authentication failed');
      return;
    }

    // Step 3: Check authorization level of user
    const isAuthorized = await checkAuthorizationPromise(req.body.username);

    if (!isAuthorized) {
      res.status(403).send('User not authorized');
      return;
    }

    // Step 4: Perform the action
    const result = await performActionPromise(req.body.actionData);

    // Step 5: Send Notification E-mail
    await sendNotificationEmailPromise(req.body.username);

    // Step 6: Send response back to the user browser
    res.status(200).send('Action performed successfully');
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('An error occurred');
  }
});

XmlHttpRequest same as fetch()
```

Recap: 
JS --> JS engine 
* Event loop, Macro task Queue, Micro Task Queue, WebApi / Libuv [async libraries]
* Global Creation context, execution Context
* Function creation Context, execution Context
* use strict
* Different ways of creating objects
* inheirted methods in function: bind, call, apply
* Arrow / Lambda, destructuring, Promise, async and await.

====================

HOF: high order functions
* functions which accept function as argument
* function returns a function

https://rxmarbles.com/
Commonly used HOF:
1) filter
2) map
3) reduce
4) forEach

```
    let users = [...]
    let data = [5,2,5,11,14];

    for(var i = 0; i users.length; i++) {
        console.log(users[i]);
    }
    // instead: forEach(data, console.log)
     for(var i = 0; i users.length; i++) {
        alert(users[i]);
    }
    // instead: forEach(data, alert)
     for(var i = 0; i users.length; i++) {
        writeToFile(users[i]);
    }
    // instead: forEach(data, writeToFile)

```

HOF: function returns a function

```
    function adder(base) {
        return function(no) {
            return base + no;
        }
    }

    let fiveAdder = adder(5);
    console.log(fiveAdder(2));
    console.log(fiveAdder(4));

    let tenAdder = adder(10);
    console.log(tenAdder(2));
    console.log(tenAdder(4));

```

Closure: When a function returns a function, returned function can access all the members of outer function

Memoization is an optimization technique that speeds up computer programs by caching (storing) the results of expensive function calls and returning the cached result when the same inputs occur again

expensive function call:
getProduct(5); --> Tomcat -> RestController -> Database -> result -> JSON -> return JSON

getProduct(5); -> give it from Cache

================================

```
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(users => localStorage.setItem("users", JSON.stringify(users)));

let users = JSON.parse(localStorage.getItem("users"))

users[0];

```

DOM: Document Object Model

The Document Object Model (DOM) is a cross-platform, language-independent interface that treats HTML or XML documents as a tree structure, where each node is an object representing a part of the document.

```
    <products>
        <product id="1">
            <name>A</name>
            <price>1313</price>
        </product>
         <product id="2">
            <name>B</name>
            <price>6232</price>
        </product>
    </products>

JAVA: SAX, DOM libraries

document object

Why this interface?
* Access elements programatically
* create / remove / modify elements
* add events to existing elements
* traverse thro element

Different ways to access elements:
1) getElementById single element
document.getElementById("tmpl-header_nav")

2) getElementByTagNames gives array of elements
document.getElementsByTagName("div")

3) querySelector and querySelectorAll advance selection option
Get By class Name:
document.querySelector(".tmpl-headerNav_item")
Get By Id:
document.querySelector("#tmpl-header_nav")
document.querySelector(".tmpl-headerNav_item > div")
document.querySelector(".tmpl-headerNav_item > div").innerHTML
document.querySelector(".tmpl-headerNav_item > div").innerHTML = "Banu Prakash"

1. Basic Selectors
Universal Selector (*): Selects all elements in the document.
Type Selector (element): Selects all elements of a specific tag (e.g., p, h1).
Class Selector (.class): Selects all elements with a specific class attribute.
ID Selector (#id): Selects a single unique element with a specific ID. 

2. Combinators
Descendant Selector (A B): Selects all B elements that are anywhere inside A.
Child Selector (A > B): Selects only direct children B of parent A.
Adjacent Sibling Selector (A + B): Selects the element B that is immediately after A.
General Sibling Selector (A ~ B): Selects all B elements that follow A as siblings. 

3. Attribute Selectors
Presence ([attr]): Selects elements that have the specified attribute.
Exact Match ([attr="value"]): Selects elements with an exact attribute value.
Starts With ([attr^="val"]): Selects elements where the attribute begins with "val".
Ends With ([attr$="val"]): Selects elements where the attribute ends with "val".
Contains ([attr*="val"]): Selects elements where the attribute contains "val". 

 +4
4. Pseudo-Classes (State & Position)
:hover: Styles an element when the user mouses over it.
:focus: Styles an element when it has keyboard or click focus.
:not(selector): Selects every element that does not match the specified selector.
:first-child / :last-child: Targets the first or last child of a parent.
:nth-child(n): Targets the nth child (e.g., :nth-child(2), :nth-child(odd)).
:has(selector): Selects an element if it contains a descendant matching the selector. 

5. Pseudo-Elements
::before / ::after: Inserts content before or after the element's content via CSS.
::first-letter / ::first-line: Styles the first letter or first line of a block-level element.
::selection: Styles the part of an element that is highlighted by the user. 


```

DOM events:
1) click, change, mouseEnter, mouseExit, mouseMove, keyPress, keyDown, keyUp, focus, blur, load, unload

DOM Events are generated by user interaction on DOM elements like button, input, or any other DOM element.

Listeners are functions which register themselfs saying that it is interseted in certain types of events occuring on source.

One source can generate multiple events.
One Listener can listen to more than one events from different sources.

https://www.w3schools.com/js/js_events.asp

=======

Rarely use DOM directly.
Instead we use libraries / framworks on top of it: jQuery, React, Backbone, Angular, Vue, Svelete, Knockout -- use them on top of DOM


=============================================

NodeJS: Platform with V8 javascript engine and libuv library for async operations.

Why NodeJS?
1) build traditional web applications like servlets and JSP using JS as prog lang
2) build RESTful Web Services like Spring Boot
3) Streaming platform like OTT
4) Real time applications like ChatBot
5) For US: we use this for client side web application development , code which runs on Browser.

Why NodeJS for client side web application development?
1) We can choose to write code in Latest version of JS, TypeScript, CoffeeScript, liveScript, DART

a) Target JS engine is for version ES2015.
I have written code in ES2023.
I need to transpile higher version of code to lower version.
I will use transpilers like Babel / Tracuer to convert to lower version
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines

NodeJs provides platform to do this conversion.

b) TypeScript: provides typesafety, JS doesn't understand data types

file.ts
var name:string = "Roger";
var age:number = 34;

age = "Hello";

tsc file.ts --> file.js [ if no compilation error]

2) NodeJS to do TESTing: Unit testing, Integration, E2E testing

3) Static Code analysis: good programming practices and conventions, tools like ESLint / Sonar

4) Minify and Uglify
 
 Original code
 ```
function calculateCircleArea(radius) {
    var pi = 3.14159;
    var area = pi * radius * radius;
    return area;
}

console.log(calculateCircleArea(10));
 ```

 Minified & Uglified Code

```
function calculateCircleArea(a){return 3.14159*a*a}console.log(calculateCircleArea(10));

```

5) Bundle
In projects we might write 20+ css files and 50+ js files
index.html
```
    <link rel="stylesheet" href="product.css" >
     <link rel="stylesheet" href="order.css" >
     <link rel="stylesheet" href="customer.css" >


    
    <script src="products.js"></script>
    <script src="customers.js"></script>
    <script src="orders.js"></script>
    <script src="payments.js"></script>
```

Issue with above code:
1) n+1 hits to the server
first request downloads index.html to browser
request goes for fetching seperately product.js, customers.js, ...
Aprox: 71 requests / network calls from browser to server [FCP first contentful paint] 

2) Order of inclusion matters:
we assume payment needs orders needs customers and products

Solution: use NodeJs to bundle them
index.html
```
    <link rel="stylesheet" href="styles.css" >
    <script src="bundle.js"></script>
```

nodews> node ./lib.js

==========================

NodeJS Project:
```
    project_folder
        package.json
        node_modules
            JS libraries
        src
            JS app code
```

module systems: controls visibility 
1) IIFE : Immediately Invoked Function Expression)
```
    file.js

    let ProductModule = (function() {
        let data = [];
        function add(p) {
            data.push(p);
        }

        function computeTotal() {
            ...
        }

        function getData() {
            computeTotal(); // valid
            return data;
        }

        return {
            add,
            getData
        }
    })();

    ProductModule.add({id: 1, name: "A"})/ //valid
    ProductModule.getData(); // valid
    ProductModule.data; // error
    ProductModule.computeTotal()

    let CustomerModule = (funciton() {
        let data = [];
    })();
```

2) CommonJS module system : default for NodeJS
module.exports [exporting ]
```
file.js
  let data = [];
        function add(p) {
            data.push(p);
        }

        function computeTotal() {
            ...
        }

        function getData() {
            computeTotal(); // valid
            return data;
        }

module.exports = {
    add,
    getData
}

```
require [ importing]
```
    other.js
    let {add, getData} = require('./file.js')
```

3) ESM: ES Module System [ default usage with React / Angular/ Vue ...]

```
file.js
  let data = [];
        export function add(p) {
            data.push(p);
        }

        function computeTotal() {
            ...
        }

        export default function getData() {
            computeTotal(); // valid
            return data;
        }
```

other.js

```
    import getData, {add} from './file'
```

4) AMD
5) SystemJS
6) UMD

===

When nodejs is installed it comes with NPM [ Node Package Manager]
optionally we can use YARN , PNPM, ...
Uses: download dependencies, publish, execute goals [npm start, npm test]
npm install react
yarn add react

==
node_example > npm init --y

 "lodash": "4.18.1" --> exact version
  "lodash": "^4.18.1" --> any latest version 4.18.1 and above
   "lodash": "~4.18.1" --> major version has to be "4" minor and patch can be latest

Testing, Static code analysis, bundlers, etc should be Development dependencies

Unit testing in JS can be done using any of the below libraries/ test runners:
1) Mocha
2) Jasmine
3) JEST 
4) vitest

Chai.js : Assertion library

Assemble --> describe
Action --> call method
Assertion - expect(result).toBe(actual)

=================

JS Build automation tools:
1) Grunt
2) Gulp
3) Webpack [default in React and Angular upto FEB 2025]
4) vite [FEB 2025]

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.
Webpack and vite supports bundling

Webpack example:
webpack-example> npm init --y
webpack-example> npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env -D

ESM:
import React from 'react';

@babel/core --> transcompiler
@babel/preset-env -> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) 

let add = (x,y) => x + y;

```
function add(x, y) {
    return x + y;
}
```

A polyfill is a piece of JavaScript code used to provide modern functionality on older browsers that do not natively support it

Promise.resolve(...);
core-js : provides many polyfills

```
npm run dev

> webpack-example@1.0.0 dev
> webpack --mode development

asset bundle.js 8.45 KiB [emitted] (name: main)
runtime modules 1020 bytes 4 modules
cacheable modules 2.56 KiB
  ./src/index.js 1.65 KiB [built] [code generated]
  ./src/lib.js 707 bytes [built] [code generated]
  ./src/Person.js 228 bytes [built] [code generated]
webpack 5.105.4 compiled successfully in 55 ms

---

npm run prod

> webpack-example@1.0.0 prod
> webpack --mode production

asset bundle.js 1.79 KiB [emitted] [minimized] (name: main)
runtime modules 743 bytes 3 modules
orphan modules 228 bytes [orphan] 1 module
cacheable modules 2.56 KiB
  ./src/index.js + 1 modules 1.87 KiB [built] [code generated]
  ./src/lib.js 707 bytes [built] [code generated]
webpack 5.105.4 compiled successfully in 171 ms
```

npm i css-loader style-loader -D 

npm i html-webpack-plugin -D
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation

npm i webpack-dev-server -D

Demystify React:
npm i @babel/preset-react -D
To convert JSX to JS

```
<img src="avatar.png" width="50px" />

src and width are attributes in HTML -- props in React

https://github.com/chentsulin/awesome-react-renderer

https://www.classmarker.com/online-test/start/?quiz=kd769d36812704ec
```

Recap:

NodeJS: project: package.json, node_modules, commonJS
JEST : testing library + runner: describe, it /test, expect, jest.fn()

JS automation tools: webpack
rules: css, js, ts --> loader
@babel/core is the transcompiler [ higher version of JS to lower version based on target]
@babel/preset-env: syntax transform, polyfills
webpack.config.js : rules ,entry, output, module rules , plugin
babel.config.js / .babelrc / babel.config.jons --> configure presets
Html-webpack-plugin:
webpack-dev-server: minature development HTTP server to test 
devtools: source-map [bundle.js --> should be mapped to original JS for debugging]

JSX: @babel/preset-react --> React object --> createElement -- convert JSX to JS

JS --> render() --> UI 

=========================

@babel/core --> transcompiler [Higher version of JS to lower version]
@babel/preset-env -> syntax transform and polyfills
@babel/preset-react -> JSX to JS object
React.createElement() -> generally provided by "react" library
npm i react

Converted JS object has to be provided to render() functions to create UI element
for that: react-dom, react-native, react-tv, proton-native

==============

TypeScript:
Statically typed programming language, it's nothing but JS + type system
* Check errors at compile time, rather than at runtime
* Better intellisense
* Documentation

TypeScript file --> typescript compiler --> JavaScript --> JS engine

========
1) initalize a NodeJS project [package.json]
ts-example> npm init --y
ts-example> npm i typescript -D
npm i typescript -g

typescript provides typesystem + tsc [ compiler]

ts-example> tsc --init
or npx tsc --init
create tsconfig.json

tsconfig.json
1)  "rootDir": "./src", 
2) "outDir": "./dist",  
3)  "include": ["src/**/*.ts"]
4) "noEmitOnError": true,

Basic data types in typescript:
string, boolean and number

```
let fname:string = "Roger";
let age:number = 34;
let employeed:boolean = true;

```

ts-example % tsc 
or
ts-example % npx tsc

============

Complex types:
1) type : to define the shape of object like struct of c or similar to minature "class"

2) Generics

```
npx tsc
node ./dist/lib.js 
```

3) any and unknown type [ avoid if possible]
let's assume we get data from 3rd party JS code. We are not sure what is sent by that function.

let data:any = doTask();
let data:unknown = doTask();

Used mainly in migration projects

4) in TS default return type of a function is void and not undefined

```

5) union type:
let course: string | number = "SPRING BOOT";
course = 5620;

```
    function doCompute(): string | number {
        if(...) {
            return "My Data"
        } else {
            return 100;
        }
    }

    let res: string | number = doCompute();
```

6) TypeScript template literal types:
build on string literal types, expands into many strings via unions

7) TypeAssertion aka TypeCasting
Sometimes we have more information about the type that TypeScript can't known.

8) infer Keyword
used with conditional types to extract or "infer" a type from another type.

9) Type Predicate

10) interface similar to type, we prefer type over interface because of its flexibility
```
interface Product {
    id: number,
    name: string,
    price: double
}

interface Mobile extends Product {
    connectivity: string
}

```
interfaces for realization relationship:

```
    interface Renderer {
        render(jsx:JSX);
    }

    class TvRenderer implements Renderer {
        render(jsx:JSX){

        }
    }
     class DomRenderer implements Renderer {
        render(jsx:JSX){
            
        }
    }
```

11) Using JS in TS
most of the libraries available are of JS libraries

https://www.npmjs.com/

https://github.com/Definitelytyped/DefinitelyTyped

npm i lodash
npm i @types/lodash -D

@types/lodash
@types/react
@types/nodejs

================

SSR -> server side rendering
CSR -> Client side rendering
Client side can have applications to convert representation of data in the form of JSON / XML to View
1) Mobile
    a) Android
    b) SWIFT
    c) Xamarin
2) Web [ Browser ]
    a) DOM
    b) jQuery
    ```
        $("<div>") -- document.createElement("div")
        $("#card") -- document.getElementById("card");
    ```
    c) Template based: Mustache, Handlebars, Knockout, Pug, Jade, EJS, ...
    https://handlebarsjs.com/examples/builtin-helper-each-block.html
    uses interpolation: data to presentation
    {{ }}
    <%- %>
    d) Backbone
        MVC based library 
        provided support for Model and Controller
        View we could choose any of the above mentioned templates

        Jackson: library -- JAVA <--> JSON
        Spring : Framework
    d) AngularJS
        Google -> Framework
        based on MVC architecture
        upto version 1.6
        Modern: Angular 2 - completly revamped

        Learning Curve: Complex
        First Program: module, template, service, component, binding, bootstrap
    c) React: View library
        XHP: 2010 -> Marcel Laverdet [ XML in PHP]
        FaxJS: 2011 --> Jordon Walke [ JsCONF] --> JSX
        Facebook: 2012 React --> open source
        Khan Academy --> Sophie Alpert
        Netflix, walmart
        https://www.youtube.com/watch?v=8pDqJVdNa44&t=4463s
        Learning Curve : Simple, just need to understand template based views and JSX
        ```
            function ProductCard(product) { 
                return <div className='card'>
                      <h1 className='card-header'>{product.name}</h1>
                        <p className='card-body'> {product.price}, 
                        {product.category}</p>
                    </div>
            }
        ```
    d) Vue
    e) Svelete
   
3) TV: SmartOS / WebOS api

==========

React application:
react library : Core capabilities to Handle JSX [ has React.createElement()]
react-dom: library to render for web 

Atom design pattern.

===========================

Older applications we use Webpack, Create React App (CRA) using webpack deprecated in FEB 2025

Suggested for new react applications is "vite"

===
1) creating vite project

npx create vite@latest

```

npm create vite@latest
```
Need to install the following packages:
create-vite@9.0.4
Ok to proceed? (y) 


> npx
> create-vite

│
◇  Project name:
│  react-simple
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes
│
```
Can Stop and re-run using
npm run dev


Using Webpack:
npx create-react-app sample-react

props: data passed from parent component to child component

State, event handling, life-cycle methods of React

===========

TypeScript: string, boolean, number, type, any, unknown, undefined, array, enum, interface and class

type and interface are interchangable for defining shape of object.
interface is prefered for Realization relationship [ abstract method]

Template String literal: union of strings [Chess Board has 64 possible positions]
CSS Box Model: many combinations like margin: 10px, margin-top:3%, padding-bottom: 15em, ...

The infer keyword: to derive/ extract a type like return type of function, first argument, all params, type of array.

type ReturnType = T extends (...args:any[]) => infer R ? R : never 

type AType = ReturnType<typeof fetch>

==============

React: vite JS build tool was used to create react scaffolding code
npm create vite@latest
1) index.html, main.jsx, App.jsx
2) react and react-dom libraries are included
3) main.jsx rendered App.jsx 

react library:
```
1) React.createElement() --> JSX -> JS Object [ consider as Virtual DOM]
2) functional components return JSX --> React.createElement() --> JS Object
3) class components [ not advisable to use from React 16.8 version onwards]
render() --> JSX --> React.createElement() --> JS Object
```
class Users extends Component {
    // state
    // behaviour
    render() {
        return <div>

        </div>
    }
}

```

-====

render provided by react-dom / react-native / proton-native / react-tv
takes the Virtual DOM [ JS given by React.createElement()] ==> UI elements

==================

Thinking in React: 
Atomic Design is a methodology for creating design systems by breaking user interfaces into five distinct, hierarchical levels of components
1) Atoms: The smallest, indivisible building blocks. In React, these are often single HTML elements with basic styling.
Examples: Buttons, input fields, labels, and icons.

<Image />
<Button />
<Input />

99% of the time we use ready to use Atoms from libraries like:
MUI, react-bootstrap, prime-react, KendoUI, Adobe Web Spectrum

Hardly we use HTML DOM element directly like
<button type="button">On Click </button>

2) Molecules: Simple groups of atoms functioning together as a single unit.
Examples: A SearchBar (Input + Button) or a FormField (Label + Input).

3) Organisms: Complex UI sections composed of molecules and/or atoms. They form a distinct, functional part of the interface.
Examples: Header, Footer, Navigation Bar, or Product Card.

75% of the time we get them from ready to use libraries like mentioned above.

4) Templates: Blueprints or wireframes that arrange organisms into a specific layout structure without focus on final content.

5) Pages

=========================

https://react.dev/learn/thinking-in-react
======
```
npm create vite@latest 
 customerapp
 React
 JavaScript
 Yes for installing node modules

```

React: uni-directional data flow [ parent -> child], one-way mapping
Angular: two-way binding [ parent <--> child]

===================

React Hooks are special functions introduced in React 16.8 that allow developers to use state, lifecycle methods, and other core features within functional components without writing a class

Hooks:
1) useState
2) useEffect
3) useReducer
4) useContext
5) useRef

Build SPA using routers
A Single-Page Application (SPA) is a web app that loads a single HTML document and dynamically updates content via JavaScript—usually using frameworks like React or Vue—without full page reloads.


RWD: Responsive Web Design
Definition: An approach to web development that makes pages render well on various devices—desktops, tablets, and phones—using flexible layouts and CSS.
--> CSS Libraries like Bootstrap, tailwind, Zurb, Bulma, ....
--> OR write using @media query 

Bootstrap handles RWD:
1) Viewport is divided into 12 columns
<img src="" className="col-sm-12 col-md-6 col-lg-4 col-xl-3" />

======

Feature 1: 
react-router-dom:
1) Different URLs has to show different components
2) Lazy loading of components

```
npm create vite@latest
shopapp
react
javascript
YES

terminate the server

shopapp> npm i bootstrap react-bootstrap react-router-dom 

BrowserRouter:
http://amazon.com/mobiles
http://amazon.com/tv
http://amazon.com/cart

href is for Server Side Routing

Client Side Routing using as={Link} and to="/url"
 <Nav.Link as={Link} to="/cart">Cart</Nav.Link> 
```

3) useReducer hook : prefer this over useState() if
a) state mutation is conditional
b) state mutation depends on previous state
c) state is complex

let [count, setCount] = useState(10);
setcount(100); 

state:
```
{
    "items": [
        {"id": 14, "name": "A", 
            "price": 642.22, "qty" : 1, "amount": 642.22},
    ],
    qty: 1,
    total : 642.22
}
```



Actions:
1) ADD_TO_CART
2) CLEAR_CART
3) INCREMENT

Action Objects:
```
{
    type: 'ADD_TO_CART',
    payload: {"id": 76, "name" : "P", "price": 662}
}

{
    type: 'CLEAR_CART'
}

{
    type :'INCREMENT',
    payload: 2
}

```

Reducer functions: (state, action) => new State

Instead of fetch:
npm i axios
npx json-server --watch data.json --port 1234

===================

Task 1:

```
 formData: {
        page: 0,
        signUp: {
            ...
        }
        personal: {
            ...
        },
        professional: {
            ...
        }
    }
 
 A Single Reducer should be good enough
 case "ADD_PERSONAL":
 case "ADD_PROFESSIONAL":
 case "NEXT_PAGE":
 case "PREV_PAGE" :

const PageDisplay = () => {
    swtich(page) {
        case 0:
            return <SignUp />
        case 1:
            return <PersonalForm />
        case 2:
            return <ProfessionalForm />
        case 3:
            return <Confirmation />
    }
}

return (
    <div>
        <Step />
        {
            PageDisplay()
        }
        {page != 3 && <NavigationButton />}
    </div>

)

```

Task 2:
https://opentdb.com/api.php?amount=10

===================
https://legacy.reactjs.org/docs/reconciliation.html

name = "Roger"
age = 24

When State changes --> re-render, forces it's children also to re-render

class Component --> shouldComponentUpdate() --> true render(); false --> don't call render()
In functional Components we memoize the compoents

npm install @faker-js/faker 





