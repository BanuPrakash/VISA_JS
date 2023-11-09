// Association Reference
const mongoose = require('mongoose');

const { Schema, model, connect, connection } = mongoose;

connect('mongodb://localhost:27017/sales_db');

const Person = model("Person", Schema({ name: String, email: String }));

const Movie = model("Movies", Schema({
    title: String,
    director: {
        type: mongoose.ObjectId,
        ref: 'Person'
    },
    actors: [
        {
            type: mongoose.ObjectId,
            ref: 'Person'
        }
    ]
}));

async function addMovies() {
    try {
        const people = await Person.create([
            { name: 'Nolan', email: 'nolan@hw.com' },
            { name: 'Christhopher', email: 'chris@gmail.com' },
            { name: 'scarlett', email: 'sc@gmail.com' }
        ]);

        await Movie.create({
            title: 'Batman',
            director: people[0]._id,
            actors: [people[1]._id, people[2]._id]
        });

        let movie = await Movie.findOne();
        console.log(movie.title);

        movie = await Movie.findOne().populate('director');
        console.log(movie.title);
        console.log(movie.director.name, movie.director.email);
        console.log(movie.actors); // undefined

        movie = await Movie.findOne().populate('director').populate('actors');
        console.log(movie.title);
        console.log(movie.director.name, movie.director.email);
        console.log(movie.actors);

    } finally {
        connection.close();
    }
}

addMovies();