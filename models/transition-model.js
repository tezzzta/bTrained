// models/transition-model.js
const connection = require('../DataBases/db');  // Asegúrate de que la ruta sea correcta
console.log('Tipo de connection:', typeof connection); // Esto debería ser un objeto

// Definición de la tabla de transiciones
const createTransitionTable = `CREATE TABLE IF NOT EXISTS transiciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    created_by_user_id INT NOT NULL,
    FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE CASCADE
)`;

// Crear la tabla
connection.query(createTransitionTable, (err, results) => {
  if (err) {
    console.error('Error al crear la tabla de transiciones:', err);
  } else {
    console.log('Tabla de transiciones creada o ya existe.');
  }
});
