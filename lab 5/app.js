const express = require("express");
const app = express();
const port = 3000;
const messageRouter = require("./routers/message");

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/v1/', messageRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));