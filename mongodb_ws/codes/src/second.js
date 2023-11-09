const mongoose = require('mongoose');

const { Schema, model, connect, connection } = mongoose;

// connect('mongodb://localhost:27017/sales_db');

// custom validation
const customerSchema = new Schema({
    name: String,
    email: {
        type: String,
        validate: {
            validator: function (data) {
                console.log(data) // banuprakashc@yahoo.co.in
                return /^[a-z]{3,10}@[a-z0-9]+\.(com|edu|co\.in)$/.test(data)
            },
            message: props => {
            console.log(props);
            `${props.value} is not a vaild ${path}`
            }
        }
    }
});

const Customer = model("Customer", customerSchema);
// map to "customers" collection

let customer = new Customer({ name: 'Smith', email: 'smithgmail.com' });
// pass to create or update --> it should fail

const errors = customer.validateSync();
if (errors)
    console.log(errors.errors['email'].message)
