var renderer = require('./renderer');

function homeRoute(req, res) {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        renderer.view('header', {}, res);
        renderer.view('search', {}, res);
        renderer.view('footer', {}, res);
        res.end();
    }
}

function searchRoute(req, res) {
    if (req.url.startsWith('/results')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        var name = req.url.replace('/results?name=', '');

        renderer.view('header', {}, res);
        renderer.view('results', {
            user: name
        }, res);
        renderer.view('footer', {}, res);
        res.end();
    }
}

module.exports.home = homeRoute;
module.exports.search = searchRoute;