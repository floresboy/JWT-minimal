// https://www.youtube.com/watch?v=xBYr9DxDqyU
// https://www.youtube.com/watch?v=mbsmsi7l3r4

// Usage :
// nodemon --watch index.js
// curl --location --request POST '0.0.0.0:3000/api/login' --data-raw ''
// >> the above wiil produce a JWT token string  (Bearer) that can be used for auth input below.
// curl --location --request GET '0.0.0.0:3000/api/protected' --header 'Authorization: Bearer eyJhbGc....Xk7P1JlNeI70ii3FcQ'

var express = require('express');
var jwt = require('jsonwebtoken');

const app = express();

app.get('/api', function(req, res) {
    res.json({
        text: 'Kamiels Java Web Token Test API v2'
    });
});


app.post('/api/login', function(req, res) {
    // auth user
    const user = { id: 3 };
    const token = jwt.sign({ user }, 'ks_secret_key');
    res.json({
        token: token
    });
});


app.get('/api/protected', ensureToken, function(req, res) {
    jwt.verify(req.token, 'ks_secret_key', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'this is protected',
                data: data
            });
        }
    })
});

function ensureToken(req, res, next) {
    const beareHeader = req.headers["authorization"];
    if (typeof beareHeader !== 'undefined') {
        const bearer = beareHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}


app.listen(3000, function() {
    console.log('app listening on port 3000!');
});