const axios = require("axios");
const fs = require("fs");

const CLIENT_ID = "67c7cb587dab280"; // Reemplaza con tu Client ID de Imgur

async function uploadImage(imagePath) {
  try {
    const image = fs.readFileSync(imagePath, { encoding: "base64" });

    const response = await axios.post(
      "https://api.imgur.com/3/upload",
      { image },
      { headers: { Authorization: `Client-ID ${CLIENT_ID}` } }
    );

    console.log("Imagen subida con éxito:", response.data.data.link);
    return response.data.data.link; // Retorna la URL de la imagen
  } catch (error) {
    console.error("Error al subir la imagen:", error.response.data);
  }
}

module.exports = { uploadImage };
