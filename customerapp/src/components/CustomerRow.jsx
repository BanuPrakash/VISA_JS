import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div className="card">
            {firstName}, {lastName}
            <button onClick={() => this.deleteRow(id)}>&times;</button>
        </div>
    }

    deleteRow(id) {
        console.log("delete row ", id);
        this.props.delEvt(id);
    }
}