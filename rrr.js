const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ed-proj'
});

connection.connect();

// Obtén la estructura de la base de datos
connection.query('SHOW TABLES', (err, tables) => {
  if (err) {
    console.error('Error al obtener las tablas:', err);
    connection.end();
    return;
  }

  let sqlScript = '';
  let tableCount = tables.length; // Contador para saber cuántas tablas hay

  // Para cada tabla, genera el script de creación
  tables.forEach(table => {
    connection.query(`SHOW CREATE TABLE ${table['Tables_in_ed-proj']}`, (err, result) => {
      if (err) {
        console.error(`Error al obtener el CREATE TABLE de ${table['Tables_in_ed-proj']}:`, err);
        return;
      }
      sqlScript += result[0]['Create Table'] + ';\n\n';

      // Comprobamos si todas las tablas han sido procesadas
      tableCount--;
      if (tableCount === 0) {
        // Guarda el script en un archivo
        fs.writeFileSync('ed-proj.sql', sqlScript);
        console.log('Archivo ed-proj.sql creado con éxito');
        connection.end();
      }
    });
  });
});
