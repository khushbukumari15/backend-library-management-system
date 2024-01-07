const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const routes = require('./routes/health.route')
const bookRouter = require("./routes/books.route")
const memberRouter = require("./routes/members.route")
const issueReturnRouter = require('./routes/issuingReturnBooks.route')

app.listen(port, ()=> {
    console.log(`app is listening on ${port}`);
})

app.use(bodyParser.json())
app.use(routes);
app.use(bookRouter)
app.use(memberRouter)
app.use(issueReturnRouter)