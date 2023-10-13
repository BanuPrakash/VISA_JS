import { Component } from "react";

export default class NameComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name === nextProps.name) {
            return false;
        }
        return true;
    }
    render() {
        console.log("NameComponent renders!!!");
        return <div>
            Name in NameComponent: {this.props.name}
        </div>
    }
}