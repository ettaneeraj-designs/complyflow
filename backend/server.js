const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const dotenv = require("dotenv");

const authRoutes =
  require("./routes/authRoutes");

const taskRoutes =
  require("./routes/taskRoutes");

const uploadRoutes =
  require("./routes/uploadRoutes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/tasks",
  taskRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

const PORT =
  process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGO_URI
)

.then(() => {

  console.log(
    "MongoDB Connected"
  );

  app.listen(PORT, () => {

    console.log(
      `Server running on port ${PORT}`
    );

  });

})

.catch((error) => {

  console.log(error);

});