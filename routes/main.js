const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/login');
});
router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.get('/forgotpassword', (req, res) => {
    res.render('pages/forgotpassword');
})

router.get('/home', (req, res) => {
    res.render('pages/home', {layout: 'layouts/main.hbs'});
})

router.get('/salescount', (req, res) => {
    res.render('pages/salescount', {layout: 'layouts/main.hbs'});
})

router.get('/topselling', (req, res) => {
    res.render('pages/topselling', {layout: 'layouts/main.hbs'});
})

router.get('/shortitems', (req, res) => {
    res.render('pages/shortitem', {layout: 'layouts/main.hbs'});
})

router.get('/improvements', (req, res) => {
    res.render('pages/improvements', {layout: 'layouts/main.hbs'});
})

router.get('/404', (req, res) => {
    res.render('pages/404.hbs', {layout: 'layouts/main.hbs'});
})

router.get('/retaildashboard', (req, res) => {
    res.render('pages/retaildashboard', {layout: 'layouts/main.hbs'});
})

router.get('/employeesmanage', (req, res) => {
    res.render('pages/employeesmanage', {layout: 'layouts/main.hbs'});
})
module.exports = router;