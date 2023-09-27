const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var fs = require('fs');
const port = 3000;
const path = require('path');
const { handlebars } = require('hbs');

app.use(express.static('public'));
app.use('css', express.static(path.join(__dirname, '/public/css')));

app.use('img', express.static(path.join(__dirname, '/public/img')));
app.use('js', express.static(path.join(__dirname, '/public/js')));
app.use('fonts', express.static(path.join(__dirname, '/public/fonts')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'))
// Register the header, footer partial


handlebars.registerPartial('header', fs.readFileSync(__dirname + '/views/partials/header.hbs', 'utf8'));
handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/views/partials/footer.hbs', 'utf8'));
handlebars.registerPartial('sidebar', fs.readFileSync(__dirname + '/views/partials/sidebar.hbs', 'utf8'));
app.use('/', require('./routes/main'));

app.use('/login', require('./routes/main'));


app.use('/404', require('./routes/main'));

app.use('/forgotpassword', require('./routes/main'));

app.use('/home', require('./routes/main'));

app.use('/salescount', require('./routes/main'));

app.use('/topselling', require('./routes/main'));

app.use('/shortitem', require('./routes/main'));

app.use('/improvements', require('./routes/main'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});