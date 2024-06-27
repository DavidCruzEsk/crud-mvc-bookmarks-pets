const express = require('express');
const pets = express.Router();
const petsArray = require('../models/pet');
const { invalidIndex, petsValidation } = require('../helpers/helpers');

// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray);
});

pets.get('/:arrayIndex', invalidIndex, (req, res) => {
    const { arrayIndex } = req.params;
    if (petsArray[arrayIndex]) {
        res.status(200).json(petsArray[arrayIndex]);
    } else {
        res.status(400).json({ error: "Not found" });
    }
});

pets.post('/', petsValidation, (req, res) => {
    petsArray.push(req.body);
    res.status(201).json(petsArray[petsArray.petsArray - 1]);
});

pets.delete('/:arrayIndex', invalidIndex, (req, res) => {
    const { arrayIndex } = req.params;

    if (!petsArray[arrayIndex]) {
        res.status(404).json({ error: "Pet index to delete, does not exist" });
    } else {
        petsArray.splice(arrayIndex, 1);
        res.json({ message: 'Deleted the pet index successfully' });
    }
});

pets.put('/:arrayIndex', invalidIndex, petsValidation, (req, res) => {
    const { arrayIndex } = req.params;

    if (petsArray[arrayIndex]) {
        petsArray[arrayIndex] = req.body;
        res.status(200).json(petsArray[arrayIndex]);
    } else {
        res.status(400).json({ error:  'Index to update, does not exist' });
    }
});

module.exports = pets;