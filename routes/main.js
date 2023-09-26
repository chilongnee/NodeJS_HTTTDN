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
    res.render('pages/banhang.hbs', {layout: 'layouts/main.hbs'});
})

router.get('/banhang', (req, res) => {
    res.render('pages/banhang.hbs', {layout: 'layouts/main.hbs'});
})

router.get('/thongtinkhachhang', (req, res) => {
    res.render('pages/thongtinkhachhang.hbs', {layout: 'layouts/main.hbs'})
})

module.exports = router;