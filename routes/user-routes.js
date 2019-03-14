const router = require('express').Router();
const controller = require('../controllers/user-controller');

router.get('', controller.getUsers);

router.post('', controller.auth);

router.post('/register', controller.register);

router.post('/validate/username', controller.validateUsername);

router.post('/validate/email', controller.validateEmail);

module.exports = router;
