const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/health.route')
const bookRouter = require("./routes/books.route")

app.listen(port, ()=> {
    console.log(`app is listening on ${port}`);
})

app.use(routes);
app.use(bookRouter)