const express = require("express");
const router = express.Router();
const db = require("../models"); //importing databses

router.post("/new", (req, res) => {
  db.Genre.create({
    Name: req.body.name,
    BookId: req.body.bookid,
  })
    .then((genre) => res.send(genre))
    .catch((err) => {
      console.log("errror");
    });
});

router.get("/all", (req, res) => {
  db.Genre.findAll().then((getAllGenre) => res.send(getAllGenre));
});

router.get("/find/:id", (req, res) => {
  db.Genre.findAll({
    where: { bookid: req.params.id },
    include: [db.Book],
  })
    .then((genre) => res.send(genre))
    .catch((err) => {
      console.log("error");
    });
});

router.delete("/delete/:id", (req, res) => {
  db.Genre.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.put("/update", (req, res) => {
  db.Genre.update(
    {
      Name: req.body.name,
      BookId: req.body.bookid,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => res.send("success"));
});

module.exports = router;
