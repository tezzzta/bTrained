// models/comment-model.js

const connection = require('../DataBases/db');  // Importa la conexión desde db.js

// Definir las consultas SQL o funciones que necesiten acceso a la base de datos
const createCommentTable = `CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT NOT NULL,
  user_id INT NOT NULL,
  transition_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (transition_id) REFERENCES trancisiones(id)
)`;

// Ejecutar la consulta de creación de la tabla
connection.query(createCommentTable, (err, results) => {
  if (err) {
    console.error('Error al crear la tabla de comentarios:', err);
  } else {
    console.log('Tabla de comentarios creada o ya existe.');
  }
});
