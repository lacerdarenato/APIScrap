const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/users', controller.getAllUsersSince);
router.get('/users/:username/details', controller.getUserDetails);
router.get('/users/:username/repos', controller.getUserRepositories);


module.exports = router;