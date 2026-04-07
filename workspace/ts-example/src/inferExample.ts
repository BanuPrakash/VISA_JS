// function takes arguments and returns [returned value is inferred as R]

// function (...args:any[]) => string

type ReturnTypeOf<T> = T extends (...args:any[]) => infer R ? R : never

function add(a: number, b: number) {
    return "Res : " + (a +b );
}
// assume doTask() is provided by 3rd party possiblly JS code
function doTask() {
    // logic
    return {
        "id": 62,
        "name": "A",
        "working": false,
        "hobbies": ["chess", "read", "horse-riding", "swimming"]
    }
}

type MyType = ReturnTypeOf<typeof doTask>

let mydata:MyType = doTask();
console.log(mydata.name);

type FetchReturnType = ReturnTypeOf<typeof fetch>

type AddReturnType = ReturnTypeOf<typeof add>