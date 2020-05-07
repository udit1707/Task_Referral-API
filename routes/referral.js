const express = require('express');
const referralController = require('../controllers/referral');
const router = express.Router();
router.get('/referral', referralController.createModel);
router.get('/token',referralController.getToken);

module.exports = router;