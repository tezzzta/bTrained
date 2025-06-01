const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const UserModel = require('../models/user-model'); 


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Datos recibidos en loginUser:', req.body);
  try {
    const result = await UserModel.loginUser(email);
    if (result.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, result[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: result[0].id, email: result[0].email, username: result[0].username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Almacenar el token en una cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.status(200).json({ message: 'Usuario logueado', token });
  } catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
  }
};

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  console.log('Datos recibidos en registerUser:', req.body);

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña
    console.log(hashedPassword) 
    const result = await UserModel.registerUser({ username, email, password: hashedPassword });
    console.log('Datos que se envían al modelo:', { username, email, password: hashedPassword });

    res.status(201).json({ message: 'Usuario registrado', user: result });

  } catch (err) {
    res.status(500).json({ message: 'Error al registrar usuario', error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.render('users', { users }); 
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: err.message });
  }
};

// obtener el perfil del usuario
exports.getProfile = async (req, res) => {
  const userId = req.user.id; // Suponiendo que tienes el id del usuario en req.user

  try {
    const user = await UserModel.getUserById(userId);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Perfil del usuario', user: user[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener perfil', error: err.message });
  }
};
//  cerrar sesión
exports.logoutUser = (req, res) => {
  res.clearCookie('token'); // Eliminar la cookie que contiene el token
  res.status(200).json({ message: 'Sesión cerrada exitosamente' });
};