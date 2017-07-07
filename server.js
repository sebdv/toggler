const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use('/web', express.static('web'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.redirect('/web');
});

app.get('/api/descriptions', function (req, res) {
    res.sendfile('database/descriptions.json');
});

app.get('/api/country/:country', function (req, res) {
    if (fs.existsSync(`database/${req.params.country}.json`))
        res.sendfile(`database/${req.params.country}.json`);
    else
        res.json({error: 'pais invalido'});
});

app.post('/api/country/:country', function (req, res) {
    let country = req.body;
    fs.writeFileSync(`database/${req.params.country}.json`, JSON.stringify(country, null, 2));
    res.json({ok: true});
});

app.listen(9191, function () {
    console.log('[toggler] http://localhost:'+(process.env.PORT||9191));
});