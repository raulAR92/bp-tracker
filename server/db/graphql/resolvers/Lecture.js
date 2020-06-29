const { Lecture, Validators } = require("../../db");
const { ApolloError } = require("apollo-server");

module.exports = {
  Query: {
    Lecture: async (parent, { _id }, { currentUser }, info) => {
      const input = await Lecture.findOne({
        where: {
          _id,
        },
      });
    },
    Lectures: async (
      { InputFilter: { dateFrom, dateTo }, pageSize = 15 },
      { currentUser }
    ) => {
      let options = {
        where: { userId: currentUser._id },
      };
    },
  },
};
