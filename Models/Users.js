const mongose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
},
 {timestamps: true}   //date created and updated at
);

//create model from schema
const User = mongose.model("User", userSchema);