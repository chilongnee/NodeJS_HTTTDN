const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/login');
});
router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.post('/login', (req, res) => {
    res.render('pages/login');
});

router.post('/changepassword', (req, res) => {
    res.render('pages/changepassword');
});

router.post('/trangchu', (req, res) => {
    res.render('index');
})

module.exports = router;