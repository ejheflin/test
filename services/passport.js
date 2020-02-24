const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const user = mongoose.model("users");

//puts user into a cookie
passport.serializeUser((user, done) => {
	done(null, user.id); //this id is from my database, not from google
});

//pulls user info out of cookie
passport.deserializeUser((id, done) => {
	user.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await user.findOne({ googleId: profile.id });
			if (existingUser) {
				// user exists already
				return done(null, existingUser);
			}
			const newUser = await new user({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);
