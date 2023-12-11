const express = require('express');
const router = express.Router();

// Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths start with /skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
