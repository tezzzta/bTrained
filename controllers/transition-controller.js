const TransitionRepository = require('../models/transition-repository');
const TransitionImageRepository = require('../models/transition-image-repository');
const { uploadImage } = require('../imgur'); // Importa la función uploadImage

// crear una transicion
exports.createTransition = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Faltan datos obligatorios (título y descripción)' });
        }
        const transitionData = {
            user_id: req.user.id, // Suponiendo que tienes un middleware de autenticación que añade req.user
            title: title,
            description: description
        };

        const transitionId = await TransitionRepository.create(transitionData);

        if (req.files && req.files.image) {
            try {
                // Usamos la función de Imgur para subir la imagen
                const imageUrl = await uploadImage(req.files.image.tempFilePath); // Cambia la ruta de la imagen por la de tu archivo temporal
                await TransitionImageRepository.create(transitionId, imageUrl, req.body.imageDescription);
            } catch (imgurError) {
                console.error("Error al subir la imagen a Imgur:", imgurError);
                await TransitionRepository.delete(transitionId); // Rollback
                return res.status(500).json({ message: "Error al subir la imagen. La transición no se ha guardado." });
            }
        }
        res.status(201).json({ message: 'Transición creada', transitionId });
    } catch (error) {
        console.error("Error en createTransition:", error);
        res.status(500).json({ message: 'Error al crear la transición' });
    }
};
// obtener todas las transiciones
exports.getAllTransitions = async (req, res) => {
    try {
        const transitions = await TransitionRepository.getAll();
        res.status(200).json(transitions);
    } catch (error) {
        console.error("Error en getAllTransitions:", error);
        res.status(500).json({ message: 'Error al obtener las transiciones' });
    }
};
// buscar una transicion
exports.getTransitionById = async (req, res) => {
    try {
        const transition = await TransitionRepository.getById(req.params.id);
        if (!transition) {
            return res.status(404).json({ message: 'Transición no encontrada' });
        }
        res.status(200).json(transition);
    } catch (error) {
        console.error("Error en getTransitionById:", error);
        res.status(500).json({ message: 'Error al obtener la transición' });
    }
};
// eliminar una transicion 
exports.deleteTransitionById = async (req, res) => {
try {
  const transitionId = req.params.id;
  
        // Llama al método del repositorio para eliminar
  await TransitionRepository.delete(transitionId);

  // Eliminación exitosa: 204 No Content (sin contenido en la respuesta)
  res.status(204).send(); // send() envía una respuesta sin cuerpo;

} catch (error) {
  console.error("Error al eliminar la transición: ", error);
    // Manejo específico para "no encontrado" (adapta esto a tus mensajes de error de la base de datos)
    if (error.message.includes('not found') || error.message.includes('No existe')) { // Ejemplo con otro mensaje en español
      return res.status(404).json({ message: 'Transición no encontrada' });
  }

  // Manejo genérico de otros errores
  res.status(500).json({ message: 'Error al eliminar la transición' });
}
};

// actualizar transicion
exports.updateTransition = async (req, res) => {
  try {
    const transitionId = req.params.id;

    // Extraer datos actualizados del cuerpo de la solicitud
    const { title, description } = req.body;

    // Crear objeto con los datos actualizados
    const updatedTransitionData = {
      title,
      description,
    };

    // Llamar al método del repositorio para actualizar la transición
    await TransitionRepository.update(transitionId, updatedTransitionData);

    // Opcional: recuperar la transición actualizada de la base de datos
    // const updatedTransition = await TransitionRepository.getById(transitionId);

    // Enviar respuesta con código 200 OK (o 204 No Content si no se devuelven datos)
    res.status(200).json({ message: 'Transición actualizada' }); // O utilizar updatedTransition si se recuperó

  } catch (error) {
    console.error("Error al actualizar la transición:", error);
    res.status(500).json({ message: 'Error al actualizar la transición' });
  }
};
// ... otras funciones (update, delete, etc.) siguiendo el mismo patrón