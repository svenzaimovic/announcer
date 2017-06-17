var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();
var jwt = require("jsonwebtoken");
var authConfig = require('./auth-config');


var User = require('./user/User');


router.post('/register', function (req, res) {

    // TODO provjeriti ima li email
    // TODO provjeriti ima li name
    // TODO provjeriti ima li password i je li minimalno 8 duzine
    User.findOne({email: req.body.email}).then(function(user) {
        console.log('starting...');
        if(!user) {
            console.log('no user...');
            // User.create({
            //     name: req.body.name,
            //     email: req.body.email,
            //     password: passwordHash.generate(req.body.password),
            //     token: jwt.sign(user, process.env.JWT_SECRET)    
            // }, 
            // function (err, user) {
            //     console.log('user saved or not?');
            //     if (err) return res.status(500).send("There was a problem adding the information to the database.");
            //     res.status(200).send(user);
            // });
           User.create({
                name : req.body.name,
                email : req.body.email,
                password : passwordHash.generate(req.body.password),
            }, 
            function (err, user) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                res.status(200).send(user);
            });
        } else {
            return res.status(400).json({error: "There is already a user with that e-mail address"})
        }
    });
});

router.post('/login', function (req,res) {
    // check if there is actually a user with that email

    console.log('Prije requesta')
    User.findOne({email:req.body.email})
    .then(function(user){
        console.log('poslije baze', user);
        if(user) {
            if(!passwordHash.verify(req.body.password, user.password)){
                console.log('Password!')
                return res.status(400).json({error: "Wrong email or password"})
            }
            else {
                console.log('OK')
                var token = generateJWT(user._id);
                console.log('token');
                /// TODO expire staviti na datenow dodati onaj expiration
                res.cookie('sid', token, { 
                    httpOnly: true 
                })
                
                console.log('Ovdje');
                return res.json({
                    type: true,
                    data: user,
                    // token: token
                });
            }
        }
        else {
            return res.status(400).json({error: "Wrong email or password"})
        }
    })
})

router.post('/logout', function(req, res){
    res.clearCookie('sid');
    res.send();
})

function generateJWT(user_id){
     var token = jwt.sign({id:user_id}, authConfig.secret, {
        expiresIn: authConfig.tokenExpiration
    });

    return token;
}




module.exports = router;