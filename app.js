const express = require('express');
const app = express();
const port = 5000;

app.listen(port, ()=> {
    console.log(`app is listening on ${port}`);
})

const routes = require('./routes/health.route')
app.use(routes);