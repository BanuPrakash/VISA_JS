function filter<T>(elems:T[], predicateFn: (elem:T) => boolean) {
    let result:T[] = [];
    for(var i:number = 0; i < elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

function map<T, R>(elems:T[], transformFn: (elem:T) => R): R[] {
    let result:R[] = [];
     for(var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
     }
    return result;
}

type TProduct = {
    "id": number, 
    "name": string,
    "price": number, 
    "category":string
}

 var products: TProduct[] = [
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
   
let data:number[] = [7,3,12,88,24,90];
let evens: number[] = filter(data, (no) => no % 2 === 0);

console.log(evens);


// T and R are number
var doubles:number[] = map(data, (no) => no * 2);
console.log(doubles);

// T is TProduct
// R is string
var names:string[] = map(products, p => p.name);

//"noUncheckedIndexedAccess": true,
let no = 5;
if(data[no] !== undefined) {
let x = data[no] + 5;
}