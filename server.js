const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

// const apiRoutes = require('./routes/apiRoutes');
// app.use("/api",apiRoutes);

const bookRoutes = require('./routes/book-routes');
app.use("/api/books",bookRoutes);

const authorRoutes = require('./routes/author-routes');
app.use("/api/author",authorRoutes);

const genreRoutes = require('./routes/genre-routes');
app.use("/api/genre",genreRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT,() =>{
        console.log(`Listening on: http://localhost:${PORT}`)
    });
});