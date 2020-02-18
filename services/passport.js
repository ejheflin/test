const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');

//puts user into a cookie
passport.serializeUser((user, done) => {
	done(null, user.id); //this id is from my database, not from google
});

//pulls user info out of cookie
passport.deserializeUser((id, done) => {
	user.findById(id)
		.then(user => {
			done(null, user);
		});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		(accessToken, refreshToken, profile, done) => {
			user.findOne({ googleId: profile.id })
				.then((existingUser) => {
					if (existingUser) {
					// user exists already
					done(null, existingUser);
					} else {
					new user({ googleId: profile.id })
						.save() 
						.then(user => done(null, user));
					}
				});
				}		
	)
);