
// HOF, action will be a function
function forEach(elems, action) {
     for(var i = 0; i < elems.length; i++) {
        action(elems[i]);
     }
}

function filter(elems, predicateFn) {
    let result = [];
    // forEach(elems, (elem) => {
    //     if(predicateFn(elem)){
    //         result.push(elem);
    //     }
    // });
    for(var i = 0; i < elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}


 //     forEach(elems, (elem) => {
    //         result.push(transformFn(elem));
    // });

function map(elems, transformFn) {
    let result = [];
     for(var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
     }
    return result;
}


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

