require("dotenv").config();

// levantar el servidor. App.listen

const app = require ('./app.js')

// const PORT = 5888 || 3888 || 5018; SE QUITA Y SE PONE EN .env POR ESP PONEMOS LA LNEA DE ABAJO


const port = process.env.PORT || 3888 || 5018

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});