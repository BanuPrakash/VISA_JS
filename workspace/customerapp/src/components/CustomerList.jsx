import React, { Component } from 'react'
import CustomerRow from './CustomerRow'
import Filter from './Filter'

export default class CustomerList extends Component {
  x = 10; // state in normal OOP sense, React doesn't keep track of changes to it
  y = 15; // state in normal OOP sense,  React doesn't keep track of changes to it
    // pull from REST api call
    // http://server.com/friends

  // members added to "state" are considered for interpolation
  // any changes, automatically View updates the changed value
  state = {
     "original": [
        {"id": 1, "firstName": "Rachel", "lastName": "Green"},
        {"id": 2, "firstName": "Ross", "lastName": "Geller"},
        {"id": 3, "firstName": "Phobhe", "lastName": "Buffay"},
        {"id": 4, "firstName": "Chandler", "lastName": "Bing"},
        {"id": 5, "firstName": "Monica", "lastName": "Geller"},
        {"id": 6, "firstName": "Joey", "lastName": "Tribuanni"},
    ],
    "customers": [
        {"id": 1, "firstName": "Rachel", "lastName": "Green"},
        {"id": 2, "firstName": "Ross", "lastName": "Geller"},
        {"id": 3, "firstName": "Phobhe", "lastName": "Buffay"},
        {"id": 4, "firstName": "Chandler", "lastName": "Bing"},
        {"id": 5, "firstName": "Monica", "lastName": "Geller"},
        {"id": 6, "firstName": "Joey", "lastName": "Tribuanni"},
    ]
  }

  filterCustomers(txt) {
     let custs = this.state.original.filter(c => c.lastName.toLowerCase()
                                                .indexOf(txt.toLowerCase()) >= 0)
       this.setState({
        "customers": custs
      });
    }

  deleteCustomer(id) {
    let custs = this.state.original.filter(c => c.id !== id);
    // this.state.customers = custs; // state changes, but view won't refresh
    
    // Async function updates the state and triggers re-rendering of view
    this.setState({
      "customers": custs,
      "original": custs
    });
    //console.log(this.state.customers); // still show old data
  }

  // mask(id) {
  //   let customer = this.state.customers.find(c => c.id === id);
  //   customer.firstName = "****";
  // }
  render() {
    console.log("re-render")
    return (
      <div>
        <h1>CustomerList</h1>
        <Filter filterEvt={this.filterCustomers.bind(this)}/>
        {
            this.state.customers.map(cust => <CustomerRow 
                customer={cust} 
                delEvt={this.deleteCustomer.bind(this)}/>)
        }
      </div>
    )
  }
}
