const { BlobServiceClient } = require('@azure/storage-blob');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const connectionString =  process.env.AZURE_STORAGE_CONNECTION_STRING;

// ... el resto de tu código
// Conexión a Azure Blob Storage



// Crea un cliente de servicio de blob
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

// Nombre del contenedor (el que ya creaste en Azure)
const containerName = 'foroeducativo';

async function uploadImage(imagePath) {
  try {
    // Obtiene el cliente del contenedor
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Obtiene el nombre del archivo
    const fileName = path.basename(imagePath);

    // Crea un cliente de blob
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    // Lee el archivo localmente
    const file = fs.readFileSync(imagePath);

    // Sube el archivo al blob
    const uploadBlobResponse = await blockBlobClient.upload(file, file.length);
    console.log(`Archivo ${fileName} subido exitosamente\n\tURL: ${blockBlobClient.url}`);

    // Retorna la URL del blob
    return blockBlobClient.url;
  } catch (err) {
    console.error(`Error al subir el archivo: ${err}`);
    throw err; // Re-lanza el error para que pueda ser manejado por el llamador
  }
}
