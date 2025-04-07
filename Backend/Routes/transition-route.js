const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authmiddl'); // Asegúrate de importar correctamente el middleware
const TransitionController = require('../controllers/transition-controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configura multer para guardar archivos en la carpeta 'uploads'

// crear una nueva transición con imagen
router.post('/create', authenticate, upload.single('image'), TransitionController.createTransition);

//  obtener todas las transiciones
router.get('/', authenticate, TransitionController.getAllTransitions);

//obtener una transición específica
router.get('/:id', TransitionController.getTransitionById);

// editar una transición
router.put('/:id', authenticate, TransitionController.updateTransition);

//eliminar una transición
router.delete('/:id', authenticate, TransitionController.deleteTransitionById);

module.exports = router;