var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/cirrus', function (req, res, next) {
    res.render('cirrus', { title: 'Cirrus' });
});

router.get('/cumulus', function (req, res, next) {
    res.render('cumulus', { title: 'Cumulus' });
});

router.get('/stratus', function (req, res, next) {
    res.render('stratus', { title: 'Stratus' });
});

module.exports = router;
