// controllers/transitionController.js

const connection = require('../DataBases/db');  // Conexión a MySQL

// Crear una nueva transición
exports.createTransition = (req, res) => {
  const { title, description, image, created_by_user_id } = req.body;

  const query = 'INSERT INTO trancisiones (title, description, image, created_by_user_id, created_at) VALUES (?, ?, ?, ?, ?)';
  const values = [title, description, image, created_by_user_id, new Date()];

  connection.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al crear transición', error: err });
    }
    res.status(201).json({ message: 'Transición creada', transitionId: results.insertId });
  });
};

// Obtener todas las transiciones
exports.getAllTransitions = (req, res) => {
  const query = 'SELECT * FROM trancisiones';

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener transiciones', error: err });
    }
    res.status(200).json(results);
  });
};

// Obtener una transición específica por ID
exports.getTransitionById = (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM trancisiones WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener transición', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Transición no encontrada' });
    }

    res.status(200).json(results[0]);
  });
};


// Actualizar una transición
exports.updateTransition = (req, res) => {
  const { id } = req.params;
  const { title, description, image, created_by_user_id } = req.body;

  const query = `
    UPDATE trancisiones  
    SET title = ?, description = ?, image = ?, created_by_user_id = ?, updated_at = ? 
    WHERE id = ?
  `;
  const values = [title, description, image, created_by_user_id, new Date(), id];

  connection.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar la transición', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Transición no encontrada' });
    }
    res.status(200).json({ message: 'Transición actualizada', updatedRows: results.affectedRows });
  });
};

// Eliminar una transición
exports.deleteTransition = (req, res) => {
  const { id } = req.params;

  const query = `
    DELETE FROM trancisiones
    WHERE id = ?
  `;
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar la transición', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Transición no encontrada' });
    }
    res.status(200).json({ message: 'Transición eliminada', deletedRows: results.affectedRows });
  });
};
// controllers/transitionController.js
exports.getAllTransitions = (req, res) => {
  // Supongamos que obtienes transiciones desde la base de datos
  const transitions = [ /* datos de ejemplo o consulta a la DB */ ];

  // Renderiza la vista y pasa los datos
  res.render('transitions', { transitions });
};
