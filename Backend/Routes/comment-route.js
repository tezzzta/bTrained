const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authmiddl'); // el middleware
const CommentController = require('../controllers/comment-controller');


// crear un comentario
router.post('/crear', authenticate, CommentController.createComment);

//  obtener los comentarios de una transición
router.get('/comentarios/:transitionId', CommentController.getCommentsByTransition);

// ra eliminar un comentario
router.delete('/:commentId', authenticate, CommentController.deleteComment);

module.exports = router;
