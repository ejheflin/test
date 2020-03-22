const mongoose = require("mongoose");
const { Schema } = mongoose;

const programSchema = new Schema({
	Day: String,
	Exercise: String,
	Sets: String,
	Reps: String,
	Weight: String
});

mongoose.model("program", programSchema);

// mongoose.connect(
// 	"mongodb+srv://eric:recola@cluster0-tnoej.mongodb.net/test?retryWrites=true&w=majority"
// );
