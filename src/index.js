const port = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.use(express.json());

app.listen(port, err => {
  if (err) {
    throw err;
  }

  console.log(`> Ready On Server http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/get", (req, res) => {
  res.json({
    version: process.env.VERSION
  });
});

app.post("/post", (req, res) => {
  res.send(req.body);
});
