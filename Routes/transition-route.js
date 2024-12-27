const express = require('express');
const router = express.Router();
const TransitionController = require('../controllers/transition-controller');

// Ruta para crear una nueva transición
router.post('/create', TransitionController.createTransition);

// Ruta para obtener todas las transiciones
router.get('/', TransitionController.getAllTransitions);

// Ruta para obtener una transición específica
router.get('/:id', TransitionController.getTransitionById);

// Ruta para editar una transición
router.put('/:id', TransitionController.updateTransition);

// Ruta para eliminar una transición
router.delete('/:id', TransitionController.deleteTransitionById);

module.exports = router;
