const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const lectureSchema = new mongoose.Schema({
  systolic: {
    type: Number,
    required: true,
  },
  diastolic: {
    type: Number,
    required: true,
  },
  pulse: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const Lecture = mongoose.model("lectures", lectureSchema);

const validateLecture = (lecture) => {
  const schema = Joi.object({
    systolic: Joi.number().required(),
    diastolic: Joi.number().required(),
    pulse: Joi.number().required(),
    createdAt: Joi.date().default(new Date()),
  });
  return schema.validate(lecture);
};

exports.Lecture = Lecture;
exports.Schema = lectureSchema;
exports.validate = validateLecture;
