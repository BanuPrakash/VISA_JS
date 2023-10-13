import { Component } from "react";
import NameComponent from "./NameComponent";
import AgeComponent from "./AgeComponent";

export default class Parent extends Component {
    state = {
        name: "Scarlett",
        age: 32
    }

    changeAge() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        console.log("Parent Renders!!!");
        return <div>
            Name : {this.state.name} <br />
            Age : {this.state.age} <br />
            <button onClick={() => this.changeAge()}>Increment</button> <br />
            <NameComponent name={this.state.name} /> <br />
            <AgeComponent age={this.state.age} /> <br />
        </div>

    }
}