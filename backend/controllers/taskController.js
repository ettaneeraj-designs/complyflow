const Task =
  require("../models/Task");

const jwt =
  require("jsonwebtoken");

const getUserId = (req) => {

  const token =
    req.headers.authorization?.split(" ")[1];

  if (!token) return null;

  const decoded =
    jwt.verify(

      token,

      process.env.JWT_SECRET

    );

  return decoded.id;

};

const getTasks =
  async (req, res) => {

    try {

      const userId =
        getUserId(req);

      const tasks =
        await Task.find({

          userId,

        }).sort({

          createdAt: -1,

        });

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

      const userId =
        getUserId(req);

      const {

        title,

        dueDate,

        priority,

        status,

      } = req.body;

      const task =
        await Task.create({

          title,

          dueDate,

          priority,

          status,

          userId,

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