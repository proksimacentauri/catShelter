const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.post('/api/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/dashboard');
    });



  app.get('/login', function (req, res) {
    res.send("<p>Please login!</p><form method='post' action='/api/login'><input type='text' name='username'/><input type='password' name='password'/><button type='submit' value='submit'>Submit</buttom></form>");
});


  app.get('/api/user', function(req, res) {
    res.send(req.user);
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
