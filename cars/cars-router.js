const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to retrieve cars' })
    });
});

router.get('/:id', (req, res) => {
    db('cars')
        .where({id: req.params.id})
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to retrieve car' })
        })
})

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body, 'id')
        .then(ids => {
            db('cars')
                .where({id: ids[0]})
                .then(car => {
                    res.status(200).json(car)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ error: 'Failed to get car' })
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to add car' })
        })
})

module.exports = router;