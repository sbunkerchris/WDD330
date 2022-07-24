const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

// fetches information about a user from the GitHub API.
router.get('/user/:user', controllers.getUser)
// fetches information about a user's repository from the GitHub API.
router.get('/repo/:user/:reponame', controllers.getRepo)
// fetches the commit history for a user's repository from the GitHub API.
router.get('/commit/:user/:reponame', controllers.getCommit)

console.log("routes return " + router);
module.exports = router;