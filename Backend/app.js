    require('dotenv').config();
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const {uploadImage} =  require('./imgur.js'); 

    // Rutas principales
    const userRoutes = require('./Routes/user-rout');
    const transitionRoutes = require('./Routes/transition-route');
    const commentRoutes = require('./Routes/comment-route');

    // Middleware
    app.use(cors());
    app.use(express.json({ limit: '400mb' })); // por ejemplo, 10 megas
    app.use(express.urlencoded({ limit: '10mb', extended: true }));
    app.use(cookieParser());

    //acá haremos  test para la conexión al frontend 
    app.get("/api/req",(req,res)=>{
    
            res.json({message: "Conexión exitosa alz| frontend, listoo"})

    

    });

app.post('/imgur', async (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: 'Falta la imagen en base64' });
  }

  try {
    const url = await uploadImage(imageBase64);
    res.json({ url });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir imagen' });
  }
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
