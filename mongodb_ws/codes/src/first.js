const mongoose = require('mongoose');

const { Schema, model, connect, connection } = mongoose;

connect('mongodb://localhost:27017/sales_db');

const productSchema = new Schema({
    id: Number,
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    price: Number
});

// _id: ObjectId() is auto generated
const Product = model("Product", productSchema); // mapping like @Table
// products collection will be used from database
// using Product model we perform CRUD operations

// instead of "on" we use "once" for un-subscribe the connection
connection.once('connected', async () => {
    try {
        await Product.create([
            { id: 2, title: 'Mac', price: 215462.11 },
            { id: 3, title: 'iPad', price: 78000.00 }
        ])
    } finally {
        await connection.close();
    }
})

