// controllers/commentController.js

const Comment = require('../models/comment-model');  


// controllers/commentController.js
exports.createComment = (req, res) => {
  const { transition_id, user_id, comment_text } = req.body;

  const newComment = new Comment({
    transition_id,
    user_id,
    comment_text,
    created_at: new Date()
  });

  newComment.save()
    .then(comment => res.status(201).json({ message: 'Comentario añadido', comment }))
    .catch(err => res.status(500).json({ message: 'Error al añadir comentario', error: err }));
};

// Obtener comentarios de una transición
exports.getCommentsByTransition = (req, res) => {
  const { transition_id } = req.params;

  Comment.find({ transition_id })
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(500).json({ message: 'Error al obtener comentarios', error: err }));
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

