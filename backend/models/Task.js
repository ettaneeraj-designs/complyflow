const mongoose =
  require("mongoose");

const taskSchema =
  new mongoose.Schema(

    {

      title: String,

      dueDate: String,

      assignedTo: String,

      priority: {

        type: String,

        default: "Medium",

      },

      status: {

        type: String,

        default: "Pending",

      },

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

      },

    },

    {

      timestamps: true,

    }

  );

module.exports =
  mongoose.model(
    "Task",
    taskSchema
  );