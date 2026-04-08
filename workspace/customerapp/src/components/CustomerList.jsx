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
    "customers": [
        {"id": 1, "firstName": "Rachel", "lastName": "Green"},
        {"id": 2, "firstName": "Ross", "lastName": "Geller"},
        {"id": 3, "firstName": "Phobhe", "lastName": "Buffay"},
        {"id": 4, "firstName": "Chandler", "lastName": "Bing"},
        {"id": 5, "firstName": "Monica", "lastName": "Geller"},
        {"id": 6, "firstName": "Joey", "lastName": "Tribuanni"},
    ]
  }

  deleteCustomer(id) {
    let custs = this.state.customers.filter(c => c.id !== id);
    // this.state.customers = custs; // state changes, but view won't refresh
    
    // Async function updates the state and triggers re-rendering of view
    this.setState({
      "customers": custs
    });
    //console.log(this.state.customers); // still show old data
  }

  render() {
    return (
      <div>
        <h1>CustomerList</h1>
        <Filter />
        {
            this.state.customers.map(cust => <CustomerRow 
                customer={cust} 
                delEvt={this.deleteCustomer.bind(this)}/>)
        }
      </div>
    )
  }
}
