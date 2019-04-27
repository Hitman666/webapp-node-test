const express = require('express')
var exphbs = require('express-handlebars');

const app = express()
const port = 3000

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('search');
})

app.get('/results', (req, res) => {
    var name = req.query.name;
    var obj = {
        p1: "person 1",
        p2: "person 2"
    }
    res.render('results', {
        user: name,
        people: obj
    });
})

app.listen(port, () => console.log(`Example app listening! ${port}!`))