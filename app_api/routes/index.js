var express = require('express');
var router = express.Router();

var memberCtrl = require('../controllers/membersCtrl');

router.get('/members', memberCtrl.getMembers);

module.exports = router;
