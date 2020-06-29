const { gql } = require("apollo-server");
const lecture = require("./Lecture");

const set = gql`
  type Set {
    _id: String!
    name: Int!
    createdAt: Date
    lectures: [lecture!]
  }

  extend type Mutation {
    CreateLecture(systolic: Int!, diastolic: Int!, pulse: Int!): Lecture!

    UpdateLecture(systolic: Int!, diastolic: Int!, pulse: Int!): Lecture!
  }
`;

module.exports = lecture;
