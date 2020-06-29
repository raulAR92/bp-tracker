const Sequelize = require("sequelize");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Lecture, validate: validateLecture } = require("./models/Lecture");
const { Set, validate: validateSet } = require("./models/Set");
const { User, validate: validateUser } = require("./models/User");

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = process.env;

mongoose.connect(`${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  auth: {
    user: DB_USER,
    password: DB_PASS,
  },
});

module.exports = {
  db: mongoose,
  Lecture,
  Set,
  User,
  Validators: {
    validateLecture,
    validateSet,
    validateUser,
  },
};
