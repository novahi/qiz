const express = require('express')
const router = express.Router()
const loginControllers = require('../app/controllers/LoginControllers')
const passport = require("passport")
router.get('/', loginControllers.get)
router.post('/', loginControllers.post)
router.get('/auth/facebook',
  passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
module.exports = router
