const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar la solicitud del formulario
app.post('/api/form', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log('Datos recibidos:', { nombre, email, mensaje });

  res.status(200).json({ message: 'Formulario recibido con éxito' });
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
