const connection = require('../DataBases/db'); // Importa la conexión a la base de datos

// Registrar un usuario
exports.registerUser = (userData, callback) => {
  const { username, email, password } = userData;
  
  // Consulta SQL para insertar un nuevo usuario
  const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

  // Ejecuta la consulta
  connection.query(query, [username, email, password, role], (err, results) => {
    if (err) {
      return callback(err, null); // Pasa el error al callback
    }
    return callback(null, results); // Pasa los resultados (usuario creado) al callback
  });
};

// Iniciar sesión (verificar credenciales)
exports.loginUser = (email, callback) => {
  const query = `SELECT * FROM users WHERE email = ?`; // Busca el usuario por email
  
  // Ejecuta la consulta
  connection.query(query, [email], (err, results) => {
    if (err) {
      return callback(err, null); // Pasa el error al callback
    }
    return callback(null, results); // Pasa el usuario encontrado al callback
  });
};

// Obtener todos los usuarios
exports.getAllUsers = (callback) => {
  const query = `SELECT * FROM users`; // Consulta para obtener todos los usuarios
  
  // Ejecuta la consulta
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null); // Pasa el error al callback
    }
    return callback(null, results); // Pasa los resultados (usuarios) al callback
  });
};

// Obtener un usuario por su ID
exports.getUserById = (userId, callback) => {
  const query = `SELECT * FROM users WHERE id = ?`; // Consulta para obtener un usuario por su ID
  
  // Ejecuta la consulta
  connection.query(query, [userId], (err, results) => {
    if (err) {
      return callback(err, null); // Pasa el error al callback
    }
    return callback(null, results); // Pasa el usuario encontrado al callback
  });
};

// Actualizar un usuario
exports.updateUser = (userId, userData, callback) => {
  const { username, email, password } = userData;
  
  // Consulta para actualizar un usuario
  const query = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`;
  
  // Ejecuta la consulta
  connection.query(query, [username, email, password, userId], (err, results) => {
    if (err) {
      return callback(err, null); // Pasa el error al callback
    }
    return callback(null, results); // Pasa los resultados (usuario actualizado) al callback
  });
};

// Eliminar un usuario
exports.deleteUser = (userId, callback) => {
  const query = `DELETE FROM users WHERE id = ?`; // Consulta para eliminar un usuario por su ID
  
  // Ejecuta la consulta
  connection.query(query, [userId], (err, results) => {
    if (err) {
      return callback(err, null); // Pasa el error al callback
    }
    return callback(null, results); // Pasa los resultados (usuario eliminado) al callback
  });
};
