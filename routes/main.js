const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/login');
});
router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.post('/login', (req, res) => {
    res.render('pages/forgotpassword');
});

router.get('/404', (req, res) => {
    res.render('pages/404.hbs', {layout: 'layouts/main.hbs'});
})

module.exports = router;