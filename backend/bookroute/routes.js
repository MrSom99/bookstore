const express = require("express");
const router = express.Router();

const bookReg = require("../mongo/model");

router.post("/", async (req, res) => {
  const { author, bookname, year, price, description } = req.body;
  const regisbook = await new bookReg({
    author,
    bookname,
    year,
    price,
    description,
  });
  const result = await regisbook.save();
  res.send({ message: "Book registered successfully", book: result });
});

router.get("/", async (req, res) => {
  const result = await bookReg.find();
  res.send({ message: "fetching Successful", result });
});
router.get("/:id", async (req, res) => {
  const result = await bookReg.find({ _id: req.params.id });
  res.send({ message: "fetching Successful", result });
});

router.delete("/:id", async (req, res) => {
  const result = await bookReg.deleteOne({ _id: req.params.id });
  res.send({ message: "data deleted successfully", result });
});

router.put("/:id", async (req, res) => {
  const { author, bookname, year, price, description } = req.body;
  const result = await bookReg.updateOne(
    { _id: req.params.id },
    { $set: { author, bookname, year, price, description } }
  );
  res.send({ message: "update successful" });
});
module.exports = router;
