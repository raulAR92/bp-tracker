const { gql } = require("apollo-server");

const lecture = gql`
  type Lecture {
    _id: String!
    systolic: Int!
    diastolic: Int!
    pulse: Int!
    createdAt: Date
  }

  extend type Mutation {
    CreateLecture(systolic: Int!, diastolic: Int!, pulse: Int!): Lecture!

    UpdateLecture(systolic: Int!, diastolic: Int!, pulse: Int!): Lecture!
  }
`;

module.exports = lecture;
