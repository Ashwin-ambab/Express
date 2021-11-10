const express = require("express");
const router = express.Router();
const db = require("../models"); //importing databses

router.post("/new", (req, res) => {
  // console.log(req.body);
  db.Author.create({
    Name: req.body.name,
    BookId: req.body.bookid,
  })
    .then((author) => res.send(author))
    .catch((err) => {
      console.log("errror");
    });
});

router.get("/all", (req, res) => {
  db.Author.findAll().then((getAllAuthor) => res.send(getAllAuthor));
});

router.get("/find/:id", (req, res) => {
  db.Author.findAll({
    where: { bookid: req.params.id },
    include: [db.Book],
  })
    .then((author) => res.send(author))
    .catch((err) => {
      console.log("error");
    });
});

router.delete("/delete/:id", (req, res) => {
  db.Author.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

router.put("/update", (req, res) => {
    db.Author.update(
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
