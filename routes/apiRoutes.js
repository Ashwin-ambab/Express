// const express =  require('express');
// const router = express.Router();
// const db = require('../models'); //importing databses

// //get all todos
// router.get("/all",(req,res) => {
//     db.Todo.findAll().then(todos => res.send(todos));
// });


// //get a single todo by id
// router.get("/find/:id",(req,res) => {
//     db.Todo.findAll({
//         where: {
//             id: req.params.id
//         }
//     }).then(todo => res.send(todo));
// })

// //deleting a todo
// router.delete("/delete/:id",(req,res) => {
//     db.Todo.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(() => res.send("success"))
// })

// //updating a todo
// router.put("/update",(req,res) => {
//     db.Todo.update({
//         text: req.body.text,
//         description: req.body.text
//     },
//     {
//         where:{
//             id: req.body.id
//         }
//     }
//     ).then(() => res.send("success"))
// })

// //post create a new todo
// router.post("/new",(req,res) => {
//     db.Todo.create({
//         text: req.body.text,
//         description: req.body.description
//     }).then((submittedTodo) => res.send(submittedTodo)).catch((err) => {
//         console.log("errror")
//     })
// })


// module.exports = router;

