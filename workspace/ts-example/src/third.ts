type Person = {
    id: number,
    name: string,
    age: number
}

let p:Person = {"id": 4, "name": "A", "age" : 14};

// function accepts person, doesn't return anything [void]
// return is implied, no need to explictly mention it
function addPerson(person: Person): void {
    //
}

addPerson(p);

// addPerson({"id": 33, "name": "B"}) // not valid

