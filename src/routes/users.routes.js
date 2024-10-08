const { Router } = require('express');
const { registerUser, loginUser, getUser, getAllUsers } = require('../controllers/users.controller');

const router = Router();

/** Definir las rutas para la autenticación */
// http://localhost:5000/api/auth/register
router.post('/auth/register', registerUser);

// http://localhost:5000/api/auth/login
router.post('/auth/login', loginUser);

//http://localhost:5000/api/users/:id

router.get('/users/:id', getUser);

//http://localhost:5000/api/users

router.get('/users', getAllUsers);

module.exports = router; // Exportar todas las rutas definidas
