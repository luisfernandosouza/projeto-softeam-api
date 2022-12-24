const {Router} = require('express');


const route = Router();

route
    .route('/')
    .get(colaboradorController.getAllColaborador)
    .post(colaboradorController.createColaborador);

route
    .route('/:id')
    .get(colaboradorController.getColaborador)
    .patch(colaboradorController.updateColaborador)
    .delete(colaboradorController.deleteColaborador);

module.exports = route