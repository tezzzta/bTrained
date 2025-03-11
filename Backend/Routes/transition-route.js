const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authmiddl'); // Asegúrate de importar correctamente el middleware
const TransitionController = require('../controllers/transition-controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configura multer para guardar archivos en la carpeta 'uploads'

// Ruta para crear una nueva transición con imagen
router.post('/create', authenticate, upload.single('image'), TransitionController.createTransition);

// Ruta para obtener todas las transiciones
router.get('/', authenticate, TransitionController.getAllTransitions);

// Ruta para obtener una transición específica
router.get('/:id', TransitionController.getTransitionById);

// Ruta para editar una transición
router.put('/:id', authenticate, TransitionController.updateTransition);

// Ruta para eliminar una transición
router.delete('/:id', authenticate, TransitionController.deleteTransitionById);

module.exports = router;