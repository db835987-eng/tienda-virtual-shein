const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Bienvenido a Tienda Virtual SHEIN! 🚀");
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
