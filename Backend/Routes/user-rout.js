const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
console.log(userController);  // Verifica qué funciones están disponibles

//  registrar un nuevo usuario
router.post('/register', userController.registerUser);

//  iniciar sesión
router.post('/login', userController.loginUser);

//  obtener el perfil de un usuario
router.get('/profile', userController.getProfile);

//  cerrar sesión
router.post('/logout', userController.logoutUser);

module.exports = router;
