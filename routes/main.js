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

router.get('/resetpassword', (req, res) => {
    res.render('pages/resetpassword');
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

router.get('/POS', (req, res) => {
    res.render('pages/POS', {layout: 'layouts/main.hbs'});
})

router.get('/inforcustomer', (req, res) => {
    res.render('pages/inforcustomer', {layout: 'layouts/main.hbs'});
})
router.get('/invoice', (req, res) => {
    res.render('pages/invoice', {layout: 'layouts/main.hbs'});
})

router.get('/listorder', (req, res) => {
    res.render('pages/listorder', {layout: 'layouts/main.hbs'});
})
router.get('/listbrand', (req, res) => {
    res.render('pages/listbrand', {layout: 'layouts/main.hbs'});
})
router.get('/listtype', (req, res) => {
    res.render('pages/listtype', {layout: 'layouts/main.hbs'});
})
router.get('/listcolor', (req, res) => {
    res.render('pages/listcolor', {layout: 'layouts/main.hbs'});
})
router.get('/infoemployee', (req, res) => {
    res.render('pages/infoemployee', {layout: 'layouts/main.hbs'});
})
router.get('/employeesmanage', (req, res) => {
    res.render('pages/employeesmanage', {layout: 'layouts/main.hbs'});
})
router.get('/orderdetail', (req, res) => {
    res.render('pages/orderdetail', {layout: 'layouts/main.hbs'});
})
router.get('/customersmanage', (req, res) => {
    res.render('pages/customersmanage', {layout: 'layouts/main.hbs'});
})
module.exports = router;