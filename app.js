const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!!" });
});

app.post('/user',(req, res)=>{
  const {name} = req.body;
  if(!name){
    return res.status(400).json({message: "Name should not be empty."})
  }
  res.status(200).json({message: "Hello "+name+"! Welcome to this website."})
})

app.listen(PORT, () => {
  console.log("The server is up BOY!");
});
