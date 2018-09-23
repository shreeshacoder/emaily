const mongoose = require("mongoose");
const { Schema } = mongoose; //de-structuring

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

//Actual creation of model class
mongoose.model("users", userSchema);
