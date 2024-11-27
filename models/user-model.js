const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ed-proj'
});

// Definición de la tabla de usuarios (si no está creada aún)
const createUserTable = `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
)`;

// Crear la tabla
connection.query(createUserTable, (err, results) => {
  if (err) {
    console.error('Error al crear la tabla de usuarios:', err);
  } else {
    console.log('Tabla de usuarios creada o ya existe.');
  }
});

module.exports = connection;  // Exportamos la conexión para usarla en otros archivos
