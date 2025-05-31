    require('dotenv').config();
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');

    // Rutas principales
    const userRoutes = require('./Routes/user-rout');
    const transitionRoutes = require('./Routes/transition-route');
    const commentRoutes = require('./Routes/comment-route');

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());

    //acá haremos  test para la conexión al frontend 
    app.get("/api/req",(req,res)=>{
    
            res.json({message: "Conexión exitosa alz| frontend, listoo"})

    

    });


    // Rutas de la API
    app.use('/users', userRoutes);
    app.use('/transitions', transitionRoutes);
    app.use('/comments', commentRoutes);

    // Ruta raíz solo de prueba
    app.get('/', (req, res) => {
    res.json({ message: 'Backend funcionando correctamente' });
    });

    // Iniciar el servidor
    app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    });
