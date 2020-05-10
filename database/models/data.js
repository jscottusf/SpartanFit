const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  value: { type: String, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
