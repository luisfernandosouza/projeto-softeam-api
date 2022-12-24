const empresaController = require('./../controllers/empresaController.js');
const authController = require('./../controllers/authController');
const express = require('express');
const route = express.Router();

route.use(authController.protectRoutes);

route
    .route('/')
    .get(empresaController.getAllEmpresas)
    .post(empresaController.createEmpresa);

route
    .route('/:id')
    .get(empresaController.getEmpresa)
    .patch(empresaController.updateEmpresa)
    .delete(empresaController.deleteEmpresa);

module.exports = route