const connection = require('../DataBases/db'); 
   

//necesito en ttodos ya que uso una pool, debo  usar el metodo execute para hacer la solicitud a la DB
class UserModel {
    
  static async registerUser(userData) {
    const { username, email, password } = userData;
    console.log('Password a insertar:', password);
    console.log('Longitud:', password.length);
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    
    try{
      const [results] = await connection.execute(query, [username, email, password]);
      return results;
    }catch(err){
        throw err
    }
  }

  static async loginUser(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    try{
      const [result] = await connection.execute(query, [email]); 
      return result
    }catch(err){
      throw err
    } 
  }

  static getAllUsers() {
    const query = `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static getUserById(userId) {
    const query = `SELECT * FROM users WHERE id = ?`;
    return new Promise((resolve, reject) => {
      connection.query(query, [userId], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static updateUser(userId, userData) {
    const { username, email, password } = userData;
    const query = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
      connection.query(query, [username, email, password, userId], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static deleteUser(userId) {
    const query = `DELETE FROM users WHERE id = ?`;
    return new Promise((resolve, reject) => {
      connection.query(query, [userId], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = UserModel;
