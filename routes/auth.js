/*
    path:api/login
*/

const { check } = require ("express-validator");

const { Router } = require("express");
const { crearUsuario, login, renewToken } = require("../controllers/auth");
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post("/new", [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('email','EL correo es obligatorio').isEmail(),
    validarCampos
] ,crearUsuario);

router.post('/',[
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('email','EL correo es obligatorio').isEmail(),
], login);

// validarJWT
router.get('/renew', validarJWT ,renewToken);

module.exports = router;
