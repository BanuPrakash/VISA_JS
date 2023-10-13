import { Component } from "react";

export default class AgeComponent extends Component {
    render() {
        console.log("AgeComponent renders!!!");
        return <div>
            Age in AgeComponent: {this.props.age}
        </div>
    }
}