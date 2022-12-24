const Empresa = require('./../models/empresaModel') 

exports.getAllColaborador = catchAsync( async (req, res, next) => {
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

exports.updateColaborador = catchAsync(async (req, res, next) => {
    // const colaborador = await Colaborador.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})

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
        data:{
            colaborador
        }
    });
})