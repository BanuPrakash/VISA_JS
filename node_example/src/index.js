import { forEach, filter } from "./lib"; // ES 6 module System
var data = [6, 3, 1, 5, 7, 8];
var result = filter(data, e => e % 2 === 0);
//(data, function (e) {\n  return e % 2 === 0;\n});
forEach(result, console.log);

console.log("Hello World!!!");