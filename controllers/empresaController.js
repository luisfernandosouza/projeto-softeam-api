const Empresa = require('./../models/empresaModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllEmpresas = catchAsync( async (req, res, next) => {
    const empresas = await Empresa.find();

    res.status(200).json({
        status:'success',
        data:{
            empresas
        }
    });
});

exports.getEmpresa = catchAsync( async (req, res, next) => {
    const empresa = await Empresa.findById(req.params.id);
    res.status(200).json({
        message: 'success',
        data:{
            empresa
        }
    });
});

exports.createEmpresa = catchAsync(async (req, res, next) => {
    const empresa = await Empresa.create(req.body);
    res.status(200).json({
        status:'success',
        data: {
            empresa
        }
    });
});

exports.updateEmpresa = catchAsync(async (req, res, next) => {

    const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

    res.status(200).json({
        message: 'success',
        data:{
            empresa
        }
    });
})

exports.deleteEmpresa = catchAsync(async (req, res, next) => {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: 'success',
        data:{
            empresa
        }
    });
})