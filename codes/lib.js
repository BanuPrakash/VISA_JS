// HOF
function map(elems, transformFn) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}

// HOF
function filter(elems, predicate) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        if (predicate(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

// HOF
function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

function reduce(elems, aggregateFn, initialValue) {
    for(var i = 0; i < elems.length; i++) {
        initialValue = aggregateFn(initialValue, elems[i]);
    }
    return initialValue;
}

