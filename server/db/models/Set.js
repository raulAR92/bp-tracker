const mongoose = require("mongoose");
const { Schema: lectureSchema } = require("./Lecture");
const Joi = require("@hapi/joi");
const { date } = require("@hapi/joi");

const setSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  lectures: [lectureSchema],
});

setSchema.statics.lookup = function (lectureId) {
  return this.findOne({
    "lectures._id": lectureId,
  });
};

const Set = mongoose.model("sets", setSchema);

const validateSet = (set) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    lectures: Joi.array(),
  });
  return schema.validate(set);
};

exports.Set = Set;
exports.validate = validateSet;
