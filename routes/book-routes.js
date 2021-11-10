const express = require("express");
const router = express.Router();
const db = require("../models"); //importing databses

router.post("/new", (req, res) => {
  console.log(req.body.name);
  db.Book.create({
    BookName: req.body.name,
    published: req.body.publish,
  })
    .then((book) => res.send(book))
    .catch((err) => {
      console.log("errror");
    });
});

router.get("/all", (req, res) => {
  db.Book.findAll({
    include: [db.Author, db.Genre],
  })
    .then((allBooks) => res.send(allBooks))
    .catch((err) => {
      console.log("error");
    });
});

router.put("/update", (req, res) => {
  db.Book.update(
    {
      BookName: req.body.name,
      published: req.body.publish,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => res.send("success"));
});

router.delete("/delete/:id", (req, res) => {
  db.Book.destroy({
    include: [db.Author, db.Genre],
  },{
    where: {
      id: req.params.id,
    },
  }).then((bookDeleted) => res.send(bookDeleted))
  .catch((err) => {
      console.log("error");
  });
});

module.exports = router;
