//montar mi app
const express = require("express");
const app = express();
const productsRouter = require('./routes/products')
const testing = require('./middlewares/test');
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(testing)

app.get("/", (request, response) => {
  console.log("console.log de '/' --> Holaaa!");
  response.send("Holaaaa!!");
});


app.use("/api/products", productsRouter);



module.exports = app