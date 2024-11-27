// controllers/user.controler.js

const User = require('../models/user-model');  // Suponiendo que tienes un modelo User para la base de datos

// Controlador para registrar un usuario
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  
  // Aquí iría la lógica de validación y registro en la base de datos
  const newUser = new User({
    username,
    email,
    password, // Recuerda encriptar la contraseña antes de guardarla
  });

  newUser.save()
    .then(user => {
      res.status(201).json({ message: 'Usuario registrado', user });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al registrar usuario', error: err });
    });
};

// Controlador para iniciar sesión
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Lógica para verificar las credenciales
  User.findOne({ email })
    .then(user => {
      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }
      res.status(200).json({ message: 'Usuario logueado', user });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al iniciar sesión', error: err });
    });
};
exports.getProfile = (req, res) => {
  // Lógica para obtener el perfil del usuario
  res.status(200).json({ message: 'Perfil del usuario', user: req.user });
};
