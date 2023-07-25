const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userid:{
    type: Number,
    required: true
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: true,
  },
  streetname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: true,
  },
 
});

const User = mongoose.model("User", UserSchema);



module.exports = User;