// Definición de la tabla de opciones
const createOptionTable = `CREATE TABLE IF NOT EXISTS options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    transition_id INT NOT NULL,
    option_text TEXT NOT NULL,
    next_transition_id INT,
    FOREIGN KEY (transition_id) REFERENCES transitions(id),
    FOREIGN KEY (next_transition_id) REFERENCES transitions(id)
  )`;
  
  // Crear la tabla
  connection.query(createOptionTable, (err, results) => {
    if (err) {
      console.error('Error al crear la tabla de opciones:', err);
    } else {
      console.log('Tabla de opciones creada o ya existe.');
    }
  });
  