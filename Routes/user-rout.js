const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
console.log(userController);  // Verifica qué funciones están disponibles

// Ruta para registrar un nuevo usuario
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión
router.post('/login', userController.loginUser);

// Ruta para obtener el perfil de un usuario
router.get('/profile', userController.getProfile);

module.exports = router;
