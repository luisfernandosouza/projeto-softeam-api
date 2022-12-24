const empresaController = require('./../controllers/empresaController');
const express = require('express');
const Router = express.Router()


const route = Router();


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