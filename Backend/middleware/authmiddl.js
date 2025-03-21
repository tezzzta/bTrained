const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.token; // 🔹 Obtener el token desde la cookie

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Inicia sesión.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // 🔹 Verificar el token
    req.user = decoded; // 🔹 Guardar los datos del usuario en `req.user`
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

