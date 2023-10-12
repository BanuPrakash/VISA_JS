import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

export default class CustomerList extends Component {
    state = {
        "customers": [
            { "id": 1, "firstName": "Rachel", "lastName": "Green" },
            { "id": 2, "firstName": "Ross", "lastName": "Geller" },
            { "id": 3, "firstName": "Chandler", "lastName": "Bing" },
            { "id": 4, "firstName": "Monica", "lastName": "Geller" },
            { "id": 5, "firstName": "Joey", "lastName": "Tribuanni" },
            { "id": 6, "firstName": "Phoebe", "lastName": "Buffay" }
        ]
    }

    render() {
        return <div>
            <Filter />
            {
                this.state.customers.map(customer => <CustomerRow customer={customer} 
                    delEvt={(id) => this.deleteCustomer(id)} />)
            }
        </div>
    }

    deleteCustomer(id) {
        console.log("deleteCustomer ", id);
        let custs = this.state.customers.filter(c => c.id !== id);

        // this.state.customers = custs;
        // below code updates customers asynchronpuly and triggers re-concillation
        this.setState({
            customers: custs
        })
    }
}