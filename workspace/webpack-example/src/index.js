
//  let fs = require('fs'); // built-in node module

import forEach, {filter, map} from "./lib";
import Person from "./Person";
let p = new Person("A", 31);
console.log(p.getName(), p.getAge());

//  let {forEach, filter, map} = require('./lib');



//  fs.readFile("./src/index.js", (err, data) => {
//     if(!err){
//         console.log(data.toString());
//     }
//  });

 console.log("Done !!!");

 var products = [
            { "id": 1, "name": "Wireless Mouse", "price": 799, "category": "Electronics" },
            { "id": 2, "name": "Bluetooth Headphones", "price": 2499, "category": "Electronics" },
            { "id": 3, "name": "Coffee Mug", "price": 299, "category": "Kitchen" },
            { "id": 4, "name": "Notebook", "price": 99, "category": "Stationery" },
            { "id": 5, "name": "Gaming Keyboard", "price": 3499, "category": "Electronics" },
            { "id": 6, "name": "Office Chair", "price": 5999, "category": "Furniture" },
            { "id": 7, "name": "Water Bottle", "price": 499, "category": "Lifestyle" },
            { "id": 8, "name": "Running Shoes", "price": 3999, "category": "Footwear" },
            { "id": 9, "name": "Smart Watch", "price": 6999, "category": "Electronics" },
            { "id": 10, "name": "Backpack", "price": 1499, "category": "Accessories" }
        ];

        var electronics = filter(products, (p) => p.category === 'Electronics' );
        
        forEach(electronics, console.log);

        var data = [6,1,3, 9, 22, 98, 13, 17];

        // var evens = filter(data, (no) => no %2 === 0);
        // forEach(evens, alert);

        var doubles = map(data, (no) => no * 2);
        console.log(doubles);