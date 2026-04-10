import React, { useState } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'
import {faker} from '@faker-js/faker'

export default function Parent() {
 let [name, setName] = useState("Roger");
 let [age, setAge] = useState(18);

 function updateAge() {
    setAge(age => age + 1);
 }

 function updateName() {
    setName(faker.person.firstName());
 }
 
 console.log("Parent renders!!!");
 return (

    <div>
        <NameComponent name={name}/>
        <AgeComponent age={age} />
        <button onClick={updateName}>Change Name</button>
          <button onClick={updateAge}>Change Age</button>
    </div>
  )
}
