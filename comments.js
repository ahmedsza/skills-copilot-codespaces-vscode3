// Create web server


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Comments Index');
});

router.get('/new', (req, res) => {
    res.send('Comments New');
});

router.post('/', (req, res) => {
    res.send('Comments Create');
});

router.get('/:id', (req, res) => {
    res.send('Comments Show');
});

router.get('/:id/edit', (req, res) => {
    res.send('Comments Edit');
});

router.put('/:id', (req, res) => {
    res.send('Comments Update');
});

router.delete('/:id', (req, res) => {
    res.send('Comments Delete');
});

module.exports = router;

