const axios = require('axios');
const FormData = require('form-data')

const CLIENT_ID = "67c7cb587dab280";

async function uploadImage(imageBase64) {
  try {
    const form = new FormData();
    form.append('image', imageBase64);

    const response = await axios.post(
      'https://api.imgur.com/3/image',
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      }
    );

    console.log('Imagen subida con éxito:', response.data.data.link);
    return response.data.data.link; // Retorna la URL de la imagen
  } catch (error) {
    console.error('Error al subir la imagen:', error.response ? error.response.data : error.message);
    throw error; // Para que el caller también reciba el error
  }
}

module.exports = { uploadImage };


