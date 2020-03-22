//keys.js - figure out what set of keys to use
if (process.env.NODE_ENV === "production") {
	//we are in production - return the prod set of keys
	module.exports = require("./prod");
	console.log("PROD ENV");
} else {
	// we are in dev - return the dev keys
	module.exports = require("./dev");
	console.log("DEV ENV");
}
