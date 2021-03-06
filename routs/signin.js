'use strict';

const express = require('express');
const basicAuth = require('../middleware/BasicAuthentication');
const router = express.Router();


router.post('/api/v1/signin', basicAuth, signinUser);

function signinUser(req, res) {
  let token = req.token;
  let day = 86400000;
  //     console.log(res.header);
  res.cookie('remember token', token, {
    expires: new Date(Date.now() + day),
    httpOnly: true,
  });
  res.status(201).send(token);
}

module.exports = router;