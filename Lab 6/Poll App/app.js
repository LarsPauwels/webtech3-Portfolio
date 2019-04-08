const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const indexRouter = require('./routes/index');
const createpollRouter = require('./routes/createpoll');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/createpoll', createpollRouter);

const port = 3000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));