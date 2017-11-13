// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let newAnimal = new Schema({
    name: {type: String, required: true},
    species: {type: String, required: true},
    age: {type: String, required: true},
    color: {type: String, required: true},
    description: {type: String, required: true},

}, {versionKey: false});

module.exports = mongoose.model('Animal', newAnimal);