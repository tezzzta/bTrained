// controllers/comment-controller.js

const Comment = require('../models/comment-repository');  

// Crear comentario
exports.createComment = (req, res) => {
  const { transition_id, user_id, comment_text } = req.body;

  Comment.createComment(transition_id, user_id, comment_text, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al añadir comentario', error: err });
    }
    res.status(201).json({ message: 'Comentario añadido', commentId: result.insertId });
    });
  };


//  obtener los comentarios de una transición
exports.getCommentsByTransition = (req, res) => {
  const { transition_id } = req.params;

  Comment.getCommentsByTransition(transition_id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener comentarios', error: err });
    }
    res.status(200).json(results);  
  });
};

// eliminar un comentario
exports.deleteComment = (req, res) => {
  const { commentId } = req.params;

  Comment.deleteComment(commentId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar el comentario', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
   
}) };