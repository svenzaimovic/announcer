var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var authConfig = require('../auth-config');


var Announcement = require('./Announcement');

// CREATES A NEW ANNOUNCEMENT
router.post('/', function (req, res) {
    Announcement.create({
            title : req.body.title,
            sender : req.body.sender,
            datetime : req.body.datetime,
            content : req.body.content
        }, 
        function (err, announcement) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(announcement);
        });
});

// RETURNS ALL THE ANNOUNCEMENTS IN THE DATABASE
router.get('/', function (req, res) {
    Announcement.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the announcements.");
        res.status(200).send('');
    });
});

// router.get('/me', ensureAuthorized, function(req, res) {
//     User.findOne({_id: req.user_id}, function(err, user) {
//         if (err) {
//             return res.status(500).json({
//                 type: false,
//                 data: "Error occured: " + err
//             });
//         }
        
//         if(user){
//             res.json({
//                 type: true,
//                 data: user
//             });
//         } else {
//             return res.status(400).json({
//                 type: false,
//                 data: "Cant find user"
//             });
//         }
//     });
// });

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Announcement.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the announcement.");
        if (!user) return res.status(404).send("No announcement found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Announcement.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the announcement.");
        res.status(200).send("Announcement "+ user.name +" was deleted.");
    });
});



function ensureAuthorized(req, res, next) {
    
    if(!req.cookies || !req.cookies.sid){
        return res.send(403);
    } else {
        jwt.verify(req.cookies.sid, authConfig.secret, function(err, decoded){
            if(err){
                return res.send(403);
            }

            req.user_id = decoded.id;
            next();
        })
        
    }
}

module.exports = router;