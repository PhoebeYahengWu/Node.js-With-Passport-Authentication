const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => res.send('Welcome to the login'))

router.get('/register', (req, res) => res.send('Welcome to the register'))


module.exports = router;