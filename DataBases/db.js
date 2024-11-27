// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Reemplaza con tu usuario
  password: '',      // Reemplaza con tu contraseña
  database: 'ed-proj' // Reemplaza con el nombre de tu base de datos
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

module.exports = connection;
