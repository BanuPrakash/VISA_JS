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



 

