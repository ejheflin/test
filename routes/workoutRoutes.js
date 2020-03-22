//const Path = require("path-parser");
//const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Program = mongoose.model("program");

module.exports = app => {
	app.get("/api/wod", async (req, res) => {
		const exercises = await Program.find({});

		res.send(exercises);
	});
};
