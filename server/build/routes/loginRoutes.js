"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.redirect('/login');
}
var router = express_1.Router();
exports.router = router;
router.get('/', [requireAuth], function (req, res) {
    res.send("\n    <div>\n      <h1>hello, world</h1>\n      <a href=\"/logout\">Logout</a>\n    </div>\n  ");
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/login');
});
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <h1>Login</h1>\n      <div>\n        <label>Email:</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password:</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button type=\"submit\">Submit</button>\n    </div>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'john.doe@example.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
