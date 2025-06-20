const connection = require('../DataBases/db');  

const createCommentTable = `CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT NOT NULL,
  user_id INT NOT NULL,
  transition_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (transition_id) REFERENCES trancisiones(id)
)`;

async function createTable() {
  try {
    await connection.query(createCommentTable);
    console.log('Tabla de comentarios creada o ya existe.');
  } catch (err) {
    console.error('Error al crear la tabla de comentarios:', err);
  }
}

createTable();