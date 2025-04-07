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
            user_id: req.user.id, 
            title: title,
            description: description
        };

        const transitionId = await TransitionRepository.create(transitionData);

        if (req.files && req.files.image) {
            try {
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
exports.getAllTransitions = async (req, res) => {
    try {
        const transitions = await TransitionRepository.getAll();
        res.status(200).json(transitions);
    } catch (error) {
        console.error("Error en getAllTransitions:", error);
        res.status(500).json({ message: 'Error al obtener las transiciones' });
    }
};
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
exports.deleteTransitionById = async (req, res) => {
try {
  const transitionId = req.params.id;
  
  await TransitionRepository.delete(transitionId);

  res.status(204).send(); 

} catch (error) {
  console.error("Error al eliminar la transición: ", error);
    if (error.message.includes('not found') || error.message.includes('No existe')) { 
      return res.status(404).json({ message: 'Transición no encontrada' });
  }

  res.status(500).json({ message: 'Error al eliminar la transición' });
}
};

exports.updateTransition = async (req, res) => {
  try {
    const transitionId = req.params.id;

    const { title, description } = req.body;

    const updatedTransitionData = {
      title,
      description,
    };

    await TransitionRepository.update(transitionId, updatedTransitionData);

  
    res.status(200).json({ message: 'Transición actualizada' }); // O utilizar updatedTransition si se recuperó

  } catch (error) {
    console.error("Error al actualizar la transición:", error);
    res.status(500).json({ message: 'Error al actualizar la transición' });
  }
};
