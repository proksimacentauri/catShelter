const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

passport.use(
    new LocalStrategy(async (username,password,done) => {
        const existingUser = await User.findOne({ username: username });
   
        if(existingUser)
        {
            if (!existingUser.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
              
            }
            return done(null,existingUser);
        }

    
    const user = await new User({ username: username, password: password}).save();
    done(null, user);
    
}));