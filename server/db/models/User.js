const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  birthday: {
    type: Date,
    required: true,
    default: Date.now,
  },
  genre: {
    type: String,
    required: true,
    maxlength: 1,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
});

const User = mongoose.model("users", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().required().min(5).max(1024),
    birthday: Joi.date().required(),
    genre: Joi.string().max(1).required(),
    height: Joi.number(),
    weight: Joi.number(),
  });
  return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;
