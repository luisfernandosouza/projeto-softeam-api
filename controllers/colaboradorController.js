const Colaborador = require('./../models/colaboradorModel');
const catchAsync = require('./../utils/catchAsync');
const bcrypt = require('bcrypt')

exports.getAllColaboradores = catchAsync( async (req, res, next) => {
    const colaboradores = await Colaborador.find();
    res.status(200).json({
        status:'success',
        data:{
            colaboradores
        }
    });
});

exports.getColaborador = catchAsync( async (req, res, next) => {
    const colaborador = await Colaborador.findById(req.params.id);
    res.status(200).json({
        message: 'success',
        data:{
            colaborador
        }
    });
});

exports.createColaborador = catchAsync(async (req, res, next) => {
    const colaborador = await Colaborador.create(req.body);
    res.status(200).json({
        status:'success',
        data: {
            colaborador
        }
    });
});

exports.protectUpdateColaborador = (req, res, next) => {
    if (req.body.senha) {
        return next(new AppError('Esta rota não serve para atualizar senha', 401))
    }

    next()
}

exports.updateColaborador = catchAsync(async (req, res, next) => {

    const colaborador = await Colaborador.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

    res.status(200).json({
        message: 'success',
        data:{
            colaborador
        }
    });
})

exports.deleteColaborador = catchAsync(async (req, res, next) => {
    const colaborador = await Colaborador.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: 'success',
        data: {
            colaborador
        }
    });
})