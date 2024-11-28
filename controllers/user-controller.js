// controllers/user-controller.js
const User = require('../models/user-model'); 

// Controlador para registrar un usuario
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  
  // Llamada al modelo para registrar un usuario
  User.registerUser({ username, email, password }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al registrar usuario', error: err });
    }
    res.status(201).json({ message: 'Usuario registrado', user: result });
  });
};

// Controlador para iniciar sesión
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Llamada al modelo para verificar las credenciales
  User.loginUser(email, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al iniciar sesión', error: err });
    }
    if (result.length === 0 || result[0].password !== password) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }
    res.status(200).json({ message: 'Usuario logueado', user: result[0] });
  });
};

// Controlador para obtener todos los usuarios
// funcion solo de admin
exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener usuarios', error: err });
    }
    res.render('users', { users }); // renderiza la vista 'users.ejs'
  });
};
// Controlador para obtener el perfil del usuario
exports.getProfile = (req, res) => {
  // Aquí puedes obtener el perfil del usuario de la base de datos si es necesario
  // Suponiendo que el usuario ya está autenticado y su información está en req.user
  const userId = req.user.id;  // Esto asume que tienes el id del usuario en req.user
  
  // Llama al modelo para obtener los detalles del usuario por su ID
  User.getUserById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener perfil', error: err });
    }
    if (!user || user.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    // Si todo va bien, renderiza la vista con los datos del usuario
    res.status(200).json({ message: 'Perfil del usuario', user: user[0] });
  });
};
