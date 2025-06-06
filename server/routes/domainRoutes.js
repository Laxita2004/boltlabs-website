const express = require('express');
const router = express.Router();
const {getAllDomains} = require('../controller/domainController');

router.get('/',getAllDomains);

module.exports = router;