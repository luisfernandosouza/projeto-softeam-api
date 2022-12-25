const projetoController = require('./../controllers/projetoController');
const authController = require('./../controllers/authController');
const express = require('express');
const route = express.Router();

route.use(authController.protectRoutes);

route
    .route('/')
    .get(projetoController.getAllProjetos)
    .post(projetoController.createProjeto);

route
    .route('/:id')
    .get(projetoController.getProjeto)
    .patch(projetoController.updateProjeto)
    .delete(projetoController.deleteProjeto);

module.exports = route;