const { Schema, model } = require('mongoose');

const Thought = new Schema({
    thoughtText: {
      type: String,
      required: true,
      // char limit
    },

    createdAt: {
        //date
        //default timestamp
        //getter
    },

    username: {
      type: String,
      required: true
    },

    reactions: {
        //array
    }
  });

  //virtual

  module.exports =Thought;