let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=> {

    res.statusCode = 200;    
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Everyone</h1>');

});

module.exports = routes;