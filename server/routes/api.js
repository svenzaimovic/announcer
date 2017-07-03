var express = require('express');
var db = require('../database/db');
const router = express.Router();

var UserController = require('../database/user/UserController');
var AccountController = require('../database/AccountController');
var AnnouncementsController = require('../database/announcement/AnnouncementController');

router.use('/users', UserController)
router.use('/announcements', AnnouncementsController)
router.use('/account', AccountController)
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;

// const express = require('express');
// const router = express.Router();

// // declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';


// /* GET api listing. */
// router.get('/', (req, res) => {
//   res.send('api works');
// });

// // Get all posts
// router.get('/posts', (req, res) => {
//   // Get posts from the mock api
//   // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/posts`)
//     .then(posts => {
//       res.status(200).json(posts.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
// });

// module.exports = router;