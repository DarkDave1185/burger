const express = require('express');
const burger = require('../models/burger.js');
let router = express.Router();


router.get('/', function(req, res) {
    res.redirect('/index');
});
//orders
router.get('/index', (req, res) => {
    burger.selectAll(function(data) {
        let obj = { burgers: data };
        res.render('index', obj)
    })
});
//make order
router.post('/burger/create', function(req, res) {
    burger.insertOne(req.body.burgerName, function() {
        res.redirect('/index');
    });
});
//finish order
router.post('/burger/eat/:id', (req, res) => {
    burger.updateOne(req.params.id, () => {
        res.redirect('/index');
    });
});

module.exports = router;