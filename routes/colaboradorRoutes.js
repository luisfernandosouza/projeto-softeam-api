const express = require('express');
const colaboradorController = require('./../controllers/colaboradorController')
const route = express.Router();

const authController = require('./../controllers/authController')

route
    .route('/signup')
    .post(authController.signup);

route
    .route('/login')
    .post(authController.login);

route
    .use(authController.protectRoutes);

route
    .route('/')
    .get(colaboradorController.getAllColaboradores)
    .post(colaboradorController.createColaborador);

route
    .route('/:id')
    .get(colaboradorController.getColaborador)
    .patch(authController.protectUpdateColaborador, colaboradorController.updateColaborador)
    .delete(colaboradorController.deleteColaborador);
    
module.exports = route