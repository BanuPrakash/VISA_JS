// index signature
type PersonType = {
    id: number,
    name: string,
    age: number,
    [key:string]: any // index signature
}

let person: PersonType = {"id": 2, "name": "A", age: 51};

for(let k in person) {
    console.log(person[k]); // person[id], person[name]
}