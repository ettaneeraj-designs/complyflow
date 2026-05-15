const Task =
  require("../models/Task");

const getTasks =
  async (req, res) => {

    try {

      const tasks =
        await Task.find();

      res.json(tasks);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to fetch tasks",
      });

    }

  };

const createTask =
  async (req, res) => {

    try {

      const {
        title,
        dueDate,
        assignedTo,
        priority,
      } = req.body;

      const task =
        await Task.create({

          title,

          dueDate,

          assignedTo,

          priority,

          status: "Pending",

        });

      res.status(201).json(task);

    } catch (error) {

      res.status(500).json({
        message:
          "Task creation failed",
      });

    }

  };

const updateTask =
  async (req, res) => {

    try {

      const updatedTask =
        await Task.findByIdAndUpdate(

          req.params.id,

          req.body,

          { new: true }

        );

      res.json(updatedTask);

    } catch (error) {

      res.status(500).json({
        message:
          "Task update failed",
      });

    }

  };

const deleteTask =
  async (req, res) => {

    try {

      await Task.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Task deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Task deletion failed",
      });

    }

  };

module.exports = {

  getTasks,

  createTask,

  updateTask,

  deleteTask,

};