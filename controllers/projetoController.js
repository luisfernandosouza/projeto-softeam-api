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

    const projeto = await Projeto.findById(req.params.id).populate('empresas').populate('colaboradores');
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

    const projeto = await Projeto.findByIdAndUpdate(req.params.id, 
        {
            $push : 
            { 
                colaboradores: 
                { 
                    $each:  req.body.colaboradores
                } 
            },
            $push : 
            { 
                empresas: 
                { 
                    $each:  req.body.empresas
                }
            }
        }
    )
    .populate('empresas')
    .populate('colaboradores');
    if (req.body.nome) projeto.nome = req.body.nome;
    if (req.body.descricrao) projeto.descricrao = req.body.descricrao;
    if (req.body.status) projeto.status = req.body.status;
    if (req.body.valor) projeto.valor = req.body.valor;
    // projeto.colaboradores.push(req.body.colaboradores);
    // projeto.empresas.push(req.body.empresas)

    await projeto.save();
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
        data: {
            projeto
        }
    });
})