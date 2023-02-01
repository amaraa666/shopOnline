

const express = require('express');


const router = express.Router();
const users = require('../controllers/user.controller.js');

router.get('/users', users.getAll);
router.get('/users/:id', users.get);
router.post('/users', users.create);
router.put('/user', users.uptade);
router.delete('/users/:id', users.delete);


module.exports = router;