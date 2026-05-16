const mongoose =
  require("mongoose");

const taskSchema =
  new mongoose.Schema({

    title: {

      type: String,

      required: true,

    },

    status: {

      type: String,

      default: "Pending",

    },

    priority: {

      type: String,

      default: "Medium",

    },

    dueDate: {

      type: Date,

    },

    createdAt: {

      type: Date,

      default: Date.now,

    },

    userId: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,

    },

  });

module.exports =
  mongoose.model(
    "Task",
    taskSchema
  );