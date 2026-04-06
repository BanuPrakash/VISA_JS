// one file is one module

// Arrow fn
export const  add = (x, y) => {
    return x + y;
}

// HOF, action will be a function
export default function forEach(elems, action) {
     for(var i = 0; i < elems.length; i++) {
        action(elems[i]);
     }
}

 export function filter(elems, predicateFn) {
    let result = [];

    for(var i = 0; i < elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}



export function map(elems, transformFn) {
    let result = [];
     for(var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
     }
    return result;
}