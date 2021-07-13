const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is home page." });
});

app.listen(3000, () => {
  console.log("The server is up BOY!");
});