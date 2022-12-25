const Projeto = require('./../models/projetoModel');
const catchAsync = require('./../utils/catchAsync');



exports.getAllProjetos = catchAsync( async (req, res, next) => {
    const projeto = await Projeto.find().populate('empresas').populate('colaboradores');

    res.status(200).json({
        status:'success',
        data: {
            projeto
        }
    });
});

exports.getProjeto = catchAsync( async (req, res, next) => {

    const projeto = await Projeto.findById(req.params.id).populate('Empresa').populate('Colaborador');
    res.status(200).json({
        message: 'success',
        data:{
            projeto
        }
    });
});

exports.createProjeto = catchAsync(async (req, res, next) => {
    const projeto = await Projeto.create(req.body);
    res.status(200).json({
        status:'success',
        data: {
            projeto
        }
    });
});

exports.updateProjeto = catchAsync(async (req, res, next) => {

    const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

    res.status(200).json({
        message: 'success',
        data:{
            projeto
        }
    });
})

exports.deleteProjeto = catchAsync(async (req, res, next) => {
    const projeto = await Projeto.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: 'success',
        data:{
            projeto
        }
    });
})