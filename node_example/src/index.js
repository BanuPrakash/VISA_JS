import './styles.css';
import multiply from './lib2';
import forEach, { filter } from "./lib"; // ES 6 module System
import Person from "./Person";
import React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/Product';

var data = [6, 3, 1, 5, 7, 8];
var result = filter(data, e => e % 2 === 0);
//(data, function (e) {\n  return e % 2 === 0;\n});
forEach(result, console.log);

console.log("Hello World Webpack!!!");

let p1 = new Person("David", 23);

console.log(p1.getName(), p1.getAge());

let output = multiply(4, 5);
console.log(output);

//let Welcome = React.createElement("h1", {style: {'color': 'red'}}, "Welcome to React!!!");

//console.log(Welcome);


ReactDOM.render(<Product name="iPhone" price ="98000.00" />, document.getElementById("root"));
