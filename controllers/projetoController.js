const Empresa = require('./../models/projetoModel');

exports.getAllempresa = catchAsync( async (req, res, next) => {
    const empresas = await Empresa.find();

    res.status(200).json({
        status:'success',
        data:{
            empresas
        }
    });
});

exports.getColaborador = catchAsync( async (req, res, next) => {
    const empresa = await Empresa.findById(req.params.id);
    res.status(200).json({
        message: 'success',
        data:{
            empresa
        }
    });
});

exports.createColaborador = catchAsync(async (req, res, next) => {
    const empresa = await Empresa.create(req.body);
    res.status(200).json({
        status:'success',
        data: {
            empresa
        }
    });
});

exports.updateColaborador = catchAsync(async (req, res, next) => {

    const empresa = await EempresaByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

    res.status(200).json({
        message: 'success',
        data:{
            empresa
        }
    });
})

exports.deleteColaborador = catchAsync(async (req, res, next) => {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: 'success',
        data:{
            empresa
        }
    });
})