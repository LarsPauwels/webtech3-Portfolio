<<<<<<< HEAD
const express = require("express");
const app = express();
const port = 3000;
const messageRouter = require("./routers/message");

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/v1/', messageRouter);

=======
const express = require("express");
const app = express();
const port = 3000;
const messageRouter = require("./routers/message");

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/v1/', messageRouter);

>>>>>>> 67d841c47c6b2c277496ad9822557fab471cdeb5
app.listen(port, () => console.log(`Example app listening on port ${port}!`));