module.exports = async (client) =>{
  
  const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/', (req, res) => {
  res.send(new Date());
});
app.listen(3000);
}