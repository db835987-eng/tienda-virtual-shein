const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos (HTML, imágenes, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Tienda Virtual SHEIN corriendo en el puerto ${port}`);
});

