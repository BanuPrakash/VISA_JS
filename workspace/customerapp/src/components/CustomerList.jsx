import React, { Component } from 'react'
import CustomerRow from './CustomerRow'
import Filter from './Filter'

export default class CustomerList extends Component {
    // pull from REST api call
    // http://server.com/friends
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
  render() {
    return (
      <div>
        <h1>CustomerList</h1>
        <Filter />
        {
            this.state.customers.map(cust => <CustomerRow customer={cust} />)
        }
      </div>
    )
  }
}
