// import express from 'express';
// import path from 'path';
// import Animal from '../models/Animal';
const express = require('express');
const mongoose = require('mongoose');

const Animal = require('../models/Animal');

const router = express.Router();

// POST
// créer un nouvel animal
// route 'app/pet/add'
router.post('/pet/add', (req, res) => {
    const newAnimal = new Animal(req.body);
    newAnimal.save((err, animal) => {
        if(err) {
            res.send(err);
        }
        res.json({"message": `${animal.name} a été ajouté`})
    });
});

// GET
// afficher tous les animaux
// route 'app/pets'
router.get('/pets', (req, res) => {
    Animal.find((err, animals) => {
        if(err) {
            res.send(err);
        }
        res.json(animals);
    });
});

//GET
// afficher un seul animal par son id
// route 'app/:id
router.get('/:id', (req, res) => {
    Animal.findById(req.params.id, (err, animal) => {
        if(err) {
            res.send(err);
        }
        res.json(animal);
    });
});

//POST
// éditer un animal
// route 'app/:id/edit'
router.post('/:id/edit', (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, (err, updatedAnimal) => {
        if(err) {
            res.send(err);
        }
        res.json({"message" : `${updatedAnimal.name} a été modifié`});
    });
});

//POST
// supprimer un animal
// route 'app/:id/delete'
router.post('/:id/delete', (req, res) => {
    Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
        if(err) {
            res.send(err);
        }
        res.json({"message": `${deletedAnimal.name} a été supprimé`});
    });
});


module.exports = router;
