require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser'); 


//  rutas principales
const userRoutes = require('./Routes/user-rout');
const transitionRoutes = require('./Routes/transition-route');
const commentRoutes = require('./Routes/comment-route');

// Configuración del motor de plantillas EJS SE ACTUALIZÓ A REACT, HAY QUE CAMBIARLOOOOOO
app.set('view engine', 'ejs'); 
app.set('views', path.join( __dirname, 'views')); 
app.use(express.static("public"))

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para parsear el cuerpo de las solicitudes en formato JSON
app.use(cookieParser()); // Usa cookie-parser

//  rutas
app.use('/users', userRoutes);
app.use('/transitions', transitionRoutes);
app.use('/comments', commentRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

app.get('/', (req, res) => {
    const data = {
        message: 'Hola Mundo desde Express y EJS!' 
    };
    res.render('index', data);  
});

app.get('/crear', (req, res) => {
    res.render('crear', { message: 'Crea una transición aquí' });
});

app.get('/repertorio', (req, res) => {
    console.log('Ruta /crear visitada');  
    res.render('repertorio', { message: 'Crea una transición aquí' });
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
});

