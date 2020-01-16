var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

var users = [];
users.push({
    username: "mark123",
    password: "qwertyuiop"
});

function usernameExist(username) {
    for (x in users) {
        if (users[x].username == username) {
            console.log("用户名已存在");
            return true;
        }
    }
    console.log("用户名不存在");
    return false;

};

router.post('/username-check', function(req, res, next) {
    res.header({ "Access-Control-Allow-Origin": "*" });
    console.log(req.body.username);
    if (usernameExist(req.body.username)) {
        //如果已经存在
        res.json({ "result": 1 })
    } else {
        res.json({ "result": 0 })
    }
});

module.exports = router;