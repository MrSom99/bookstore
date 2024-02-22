const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  author: String,
  bookname: String,
  year: Number,
  price: String,
  description:String
});

const bookReg = mongoose.model("books", bookSchema);
module.exports = bookReg;
