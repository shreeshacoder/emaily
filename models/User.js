const mongoose = require("mongoose");
const { Schema } = mongoose; //de-structuring

const userSchema = new Schema({
  googleId: String
});

//Actual creation of model class
mongoose.model("users", userSchema);
