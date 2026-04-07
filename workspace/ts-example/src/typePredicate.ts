type User = {
    username : string,
    password: string
}

/*
function isString(data:unknown) {
    if(typeof data === 'string') {
        return true;
    }
    return false;
}


function isUser(data:unknown) {
    return (data as User).username ? true: false;
}


function sample(data: unknown) {
    if(isUser(data)) {
        console.log((data as User).username);
    }
    if(isString(data)) {
        console.log((data as string).toUpperCase());
    }
}

*/

// Type Predicate
// if condition evaluates to true then typecast and send it
function isString(data:unknown) : data is string {
    if(typeof data === 'string') {
        return true;
    }
    return false;
}


function isUser(data:unknown) : data is User {
    return (data as User).username ? true: false;
}


function sample(data: unknown) {
    if(isUser(data)) {
        console.log(data.username);
    }
    if(isString(data)) {
        console.log(data.toUpperCase());
    }
}


sample({"username": "sam", "password": "secret123"});

sample("guest");
