const express = require("express");
const cons = require("consolidate");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

// app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// assign the ejs engine to .ejs files
app.engine("ejs", cons.ejs);

// set .html as the default extension
// app.set("view engine", "html");
app.set("views", path.resolve(__dirname, "views"));

app.get("/hello", (req, res) => {
  res.render("hello.ejs", { name: req.query.name || null });
});

app.all("/*", async (req, res) => {
  res.json({
    hostname: req.hostname,
    port: req.port,
    url: req.url,
    cookies: req.cookies,
    headers: req.headers,
    query: req.query,
    body: req.body,
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`> Ready On Server http://localhost:${port}/`);
});
