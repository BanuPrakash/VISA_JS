import { useState } from "react";
import FakePerson from 'fake-person'

export default function Parent() {
    let [name, setName] = useState("");
    let [age, setAge] = useState(18);

    return <>
        Name: {name} <br />
        Age : {age} <br />

        <button onClick={() => {
            const fakePerson = new FakePerson();
            setName(fakePerson.getFirstName());
        }}>Change Name</button>

        <button onClick={() => setAge(age + 1)}>
            Increment Age
        </button>
    </>
}

