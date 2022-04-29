const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
      type: String,
      //unique
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      //unique
      //validate
    },

    thought: {
        //array
    },

    friends: {
        //array
    }
  });

  //virtual

  module.exports = User;