const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var fs = require('fs');
const port = 8080;
const path = require('path');
const { handlebars } = require('hbs');

app.use(express.static('public'));
app.use('css', express.static(path.join(__dirname, '/public/css')));

app.use('img', express.static(path.join(__dirname, '/public/img')));
app.use('js', express.static(path.join(__dirname, '/public/js')));
app.use('fonts', express.static(path.join(__dirname, '/public/fonts')));
app.use('scss', express.static(path.join(__dirname, '/public/scss')));

app.set('view engine', 'hbs');

// Register the header, footer partial


handlebars.registerPartial('header', fs.readFileSync(__dirname + '/views/partials/header.hbs', 'utf8'));
handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/views/partials/footer.hbs', 'utf8'));
handlebars.registerPartial('sidebar', fs.readFileSync(__dirname + '/views/partials/sidebar.hbs', 'utf8'));
app.use('/', require('./routes/main'));

app.use('/login', require('./routes/main'));


app.use('/changepasswoed', require('./routes/main'))


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});