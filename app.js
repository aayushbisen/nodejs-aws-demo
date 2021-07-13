const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is home page." });
});

app.listen(PORT, () => {
  console.log("The server is up BOY!");
});
