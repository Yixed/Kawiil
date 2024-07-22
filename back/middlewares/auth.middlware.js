const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'No estás autorizado para acceder a esta ruta' });
    }

    try {
        const decoded = jwt.verify(token, 'tu_super_secreto'); // Asegúrate de cambiar 'tu_super_secreto' con tu clave secreta de JWT.

        const currentUser = await User.findById(decoded.userId);
        if (!currentUser) {
            return res.status(401).json({ message: 'El usuario al que pertenece este token ya no existe' });
        }

        req.user = currentUser;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token no válido', error: error.message });
    }
};

const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
        }
        next();
    };
};

const restrictToSelf = (req, res, next) => {
    const userId = req.user._id; // ID del usuario autenticado
    const paramId = req.params.userId; // ID del usuario en la ruta

    if (userId.toString() !== paramId && req.user.role !== "admin") {
        return res.status(403).json({ message: "No tienes permiso para acceder a este recurso." });
    }

    next();
};

module.exports = { protect,restrictTo,restrictToSelf };
