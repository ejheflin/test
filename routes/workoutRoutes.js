//const Path = require("path-parser");
//const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const program = require("../models/program");

module.exports = app => {
	app.get("/api/wod", async (req, res) => {
		const exercises = await program.find({});

		res.send(exercises);
	});
};
