// controllers/commentController.js

const Comment = require('../models/comment-repository');  

//crea comentario
exports.createComment = (req, res) => {
  const { transition_id, user_id, comment_text } = req.body;

  const query = `INSERT INTO comments (transition_id, user_id, text, created_at) VALUES (?, ?, ?, ?)`;
  const values = [transition_id, user_id, comment_text, new Date()];

  connection.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al añadir comentario', error: err });
    }
    res.status(201).json({ message: 'Comentario añadido', commentId: results.insertId });
  });
};

//consiguec comentarios de transicion
exports.getCommentsByTransition = (req, res) => {
  const { transition_id } = req.params;

  const query = `SELECT * FROM comments WHERE transition_id = ?`;
  connection.query(query, [transition_id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener comentarios', error: err });
    }
    res.status(200).json(results);  // Devuelve todos los comentarios asociados a la transición
  });
};
// controllers/comment-controller.js

const connection = require('../DataBases/db'); // Asegúrate de tener esta importación para la conexión a la base de datos

// Eliminar un comentario
exports.deleteComment = (req, res) => {
  const { commentId } = req.params; // Obtenemos el ID del comentario de los parámetros de la ruta

  const query = `DELETE FROM comments WHERE id = ?`;  
  connection.query(query, [commentId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar el comentario', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    res.status(200).json({ message: 'Comentario eliminado', deletedRows: results.affectedRows });
  });
};

exports.getCommentsByTransition = (req, res) => {
  const { transition_id } = req.params; // Obtiene el ID de la transición de la URL
  
  // Consulta SQL para obtener todos los comentarios de una transición específica
  const query = 'SELECT * FROM comments WHERE transition_id = ?';
  
  // Ejecutar la consulta
  connection.query(query, [transition_id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener los comentarios', error: err });
    }
    
    // Renderizar la vista con los comentarios obtenidos
    res.render('comments', { comments: results, transitionId: transition_id });
  });
};