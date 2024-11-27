const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment-controller');

// Ruta para crear un comentario
router.post('/create', CommentController.createComment);

// Ruta para obtener los comentarios de una transición
router.get('/transition/:transitionId', CommentController.getCommentsByTransition);

// Ruta para eliminar un comentario
router.delete('/:commentId', CommentController.deleteComment);

module.exports = router;
