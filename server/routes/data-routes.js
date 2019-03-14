const router = require('express').Router();
const controller = require('../controllers/data-controller');

router.get('/accounts', controller.getAccounts);

router.get('/accounts/:id', controller.getAccountDetails);

router.get('/cards', controller.getCards);

router.get('/cards/:id', controller.getCardDetails);

module.exports = router;
