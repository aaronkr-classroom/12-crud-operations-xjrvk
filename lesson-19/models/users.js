// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    title: {
      // 강좌 스키마에 속성 추가
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: [],
  });

module.exports = mongoose.model("Course", courseSchema);
module.exports = {
  index: (req, res, next) => { // DB요청과 응답 
    User.find()
      .then(users => {
        res.locals.users = users;
        next()
      })
  }
}