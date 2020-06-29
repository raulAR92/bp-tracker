const { ApolloServer, gpl } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { User: Users, validate } = require("./db/models/User");
const { Lecture, validate: validateLecture } = require("./db/models/Lecture");
const { Set: Sets, validate: validateSet } = require("./db/models/Set");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const Fawn = require("fawn");
const { Task } = require("fawn");

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

Fawn.init(mongoose);

const testUser = async () => {
  const user = {
    firstName: "Raul",
    lastName: "Armendariz",
    email: "raul_ar_reyes@hotmail.coms",
    password: "123456789",
    birthday: new Date(),
    genre: "M",
    height: 186,
    weight: 105,
  };
  const { error, value } = validate(user);
  if (error) console.log(error);

  let dbUser = await Users.findOne({ email: user.email });
  if (dbUser) return console.log("User already registered.");
  try {
    dbUser = new Users(user);
    const salt = await bcrypt.genSalt(10);
    dbUser.password = await bcrypt.hash(dbUser.password, salt);
    await dbUser.save();
    console.log("elemento guardado");
    console.log(dbUser);
  } catch (error) {
    console.error(error);
  }
};

const checkPassword = async (password) => {
  const validPassword = await bcrypt.compare(
    password,
    "$2b$10$ai7cs869bhAVn9aebaLX8uCBahE10AaNd2dYEETbs.duYQDipfhWq"
  );
  console.log(validPassword);
};

const insertLecture = async () => {
  const lecture = {
    systolic: 120,
    diastolic: 80,
    pulse: 55,
    createdAt: new Date(),
  };
  try {
    const { error, value } = validateLecture(lecture);
    console.log(error);
    if (!error) {
      const dbLecture = new Lecture(lecture);
      await dbLecture.save();
      console.log(dbLecture);
    }
  } catch (error) {
    console.error(error);
  }
};

const insertSet = async () => {
  const set = {
    name: "ejemplo",
    createdAt: new Date(),
    lectures: [
      {
        systolic: 120,
        diastolic: 80,
        pulse: 55,
        createdAt: new Date(),
      },
      {
        systolic: 125,
        diastolic: 85,
        pulse: 55,
        createdAt: new Date(),
      },
      {
        systolic: 111,
        diastolic: 73,
        pulse: 55,
        createdAt: new Date(),
      },
    ],
  };

  try {
    let task = new Fawn.Task();

    /*task.save("sets", set);
    set.lectures.map(lecture => {
      let auxLecture =  new Lecture(lecture);
      return auxLecture.save();
    });*/
    if (set.lectures && set.lectures.length > 0) {
      Lecture.insertMany(set.lectures, async (error, docs) => {
        if (error) return;
        console.log(docs);
        set.lectures = [];
        docs.forEach((lecture) => {
          set.lectures.push(
            new Lecture(
              _.pick(lecture, [
                "_id",
                "systolic",
                "diastolic",
                "pulse",
                "createdAt",
              ])
            )
          );
        });
        let dbSet = new Sets(set);
        console.log(dbSet);
        await dbSet.save();
      });
    }

    /*let dbSet = new Sets(set);
    console.log(dbSet);*/
  } catch (error) {
    console.log(error);
  }
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("conectado");
  //insertLecture();
  //testUser();
  insertSet();
});
