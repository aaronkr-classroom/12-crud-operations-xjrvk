// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    /**
     * @TODO 1. 스키마에 필드 추가
     */
  });

module.exports = mongoose.model("Course", courseSchema);
courseSchema.virtual("subscribers", {
  ref: "Subscriber",
  localField: "_id",
  foreignField: "courses"
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
Subscriber.remove({}) // 모든 구독자와 강좌 정보를 삭제한다
  .then((items) => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Course.remove({});
  })
  .then((items) => console.log(`Removed ${items.n} records!`))
  .then(() => {
    // 새로운 구독자 생성
    return Subscriber.create({
      name: "Jon Wexler",
      email: "jon@wexler.com",
      zipCode: 12345,
    });
  })
  .then((subscriber) => {
    console.log(`Created Subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Subscriber.findOne({
      name: "Jon",
    });
  })
  .then((subscriber) => {
    testSubscriber = subscriber;
    console.log(`Found one subscriber: ${testSubscriber.getInfo()}`);
  })
  .then(() => {
    // 새로운 강좌 생성
    return Course.create({
      title: "Tomato Land",
      description: "Locally farmed tomatoes only",
      zipCode: 12345,
      items: ["cherry", "heirloom"],
    });
  })
  .then((course) => {
    console.log(`Created Course: ${course.title}`);
  })
  .then(() => {
    // 구독자와 강좌 연결
    testSubscriber.courses.push(testCourse);
    testSubscriber.save();
  })
  .then(() => {
    // 구독자에서 강좌 도큐먼트의 populate
    return Subscriber.populate(testSubscriber, "courses");
  })
  .then((subscriber) => console.log(subscriber))
  .then(() => {
    // ObjectID가 같은 강좌의 구독자를 퀴리
    return Subscriber.find({
      courses: mongoose.Types.ObjectId(testCourse._id),
    });
  })
  .then((subscriber) => console.log(subscriber));