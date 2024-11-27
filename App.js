const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Importamos las node rutas
const userRoutes = require('./Routes/user-rout');
const transitionRoutes = require('./Routes/transition-route');
const commentRoutes = require('./Routes/comment-route');

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

// Usamos las rutas
app.use('/users', userRoutes);
app.use('/transitions', transitionRoutes);
app.use('/comments', commentRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
