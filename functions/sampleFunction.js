const print = (...args) =>
  args
    .map((arg) => JSON.stringify(arg))
    .join(" ")
    .match(/(.{1,256})/g)
    .forEach((str) => console.log(str));

exports = async function () {
  console.log("Hellow World");
};

// const remainingTime = 123;
// const testId = BSON.ObjectId("5fa4e07b46f78e4504d6b140")
// const questions =
//   {
//     "5d7e4e4590d16e79c382e3e9": {
//       "_id": "5d7e4e4590d16e79c382e3e9",
//       "time": 23,
//       "visits": true,
//       "selectedOption": 0,
//       "doubt": false,
//       "marked": false,
//     },
//     "5d7bb6c705d1910068d2ef65": {
//       "_id": "5d7bb6c705d1910068d2ef65",
//       "time": 1,
//       "visits": true,
//       "selectedOption": null,
//       "doubt": false,
//       "marked": true,
//     },
//     "5d82fb3a4895ec79401af475": {
//       "_id": "5d82fb3a4895ec79401af475",
//       "time": 2,
//       "visits": true,
//       "selectedOption": 2,
//       "doubt": false,
//       "marked": false,
//     }
//   };
//const currQues = 1

// exports (testId, questions, remainingTime, currQues);
