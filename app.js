
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servir contenido estatico
app.use( express.static('public') );


app.get('/', ( req, res) => {
    res.render('home', {
        nombre : 'Franco',
        titulo: 'curso de node'
    });
});

/*app.get('/', ( req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
*/

app.get('/generic', ( req, res) => {
    res.render('generic', {
        nombre : 'Franco',
        titulo: 'curso de node'
    });
});

app.get('/elements', ( req, res) => {
    res.render('elements', {
        nombre : 'Franco',
        titulo: 'curso de node'
    });
});



app.listen(port, () => {
    console.log(`Hello Word on port ${port}`)
  })