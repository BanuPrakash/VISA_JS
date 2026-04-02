
// HOF, action will be a function
// function forEach(elems, action) {
//      for(var i = 0; i < elems.length; i++) {
//         action(elems[i]);
//      }
// }

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

