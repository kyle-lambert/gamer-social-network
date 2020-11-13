const mongoose = require("mongoose");

function checkValidObjectId(req, res, next) {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    next();
  } else {
    res.status(400).json({ errors: ["Invalid ID"] });
  }
}

module.exports = checkValidObjectId;
