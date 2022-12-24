const empresaController = require('./../controllers/empresaController.js');
const express = require('express');
const route = express.Router();


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