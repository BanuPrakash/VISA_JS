const {random} = require('lodash'); // check if it's pre-defiened module, else check in node_modules folder

const {filter, forEach} = require('./lib'); // CommonJS way of import

var data = [6, 3, 1, 5, 7, 8];
var result = filter(data, e => e % 2 === 0);
forEach(result, console.log);

console.log(random(1, 100));