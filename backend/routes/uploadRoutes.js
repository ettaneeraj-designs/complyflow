const express = require("express");

const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function (req, file, cb) {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});

const upload = multer({ storage });

router.post(
  "/",
  upload.single("document"),
  (req, res) => {

    res.status(200).json({
      message: "File Uploaded",
      file: req.file,
    });

  }
);

module.exports = router;