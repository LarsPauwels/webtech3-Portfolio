const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
const messageRouter = require("./routers/message");
const indexRouter = require("./routers/index");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', indexRouter);

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/v1/', messageRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));