const connection = require('../DataBases/db'); 

class UserModel {
  static registerUser(userData) {
    const { username, email, password } = userData;
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    return new Promise((resolve, reject) => {
      connection.query(query, [username, email, password], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static loginUser(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    return new Promise((resolve, reject) => {
      connection.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
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
