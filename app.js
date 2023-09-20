const express = require("express");
const ngrok = require("ngrok");
const app = express();

app.use(express.json());


const { dockerImageUrlRouter } = require("./dockerImageUpdated.js");
const { errorRouter } = require("./errorMiddleware.js");
app.use(dockerImageUrlRouter);
app.use(errorRouter);

const port = process.env.PORT || 3000;
app.listen(port, async() => {
  console.log(`server is runing on port ${port}`);
  const url = await ngrok.connect(port);
  console.log(`your public url is: ${url}`);
});

module.exports = { app };
