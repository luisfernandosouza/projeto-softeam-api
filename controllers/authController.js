const jwt = require('jsonwebtoken');
const Colaborador = require('../models/colaboradorModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');
const util = require('util');
const { promisify } = util;

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

exports.signup = catchAsync(async (req, res, next) => {
    const newColaborador = await Colaborador.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });

    const token = signToken(newColaborador._id);

    res.status(200).json({
        status:'success',
        data: {
            token,
            nome: newColaborador.nome,
            email: newColaborador.email,
        }
    })
});

exports.login = catchAsync( async (req, res, next) => {
    const {email, senha} = req.body;

    if (!email || !senha) {
        next(new AppError('É necessario fornecer o email e senha', 401));
    }

    const colaborador = await Colaborador.findOne({email}).select('+senha');
    if (!colaborador || !await colaborador.senhaCorreta(senha,colaborador.senha)) {
        return next(new AppError('É necessario fornecer o email e senha corretos', 401));
    }
    const token = signToken(colaborador._id);
    
    res.status(200).json({
        status:'success',
        data: {
            token,
            nome: colaborador.nome,
            email: colaborador.email,
        }
    })
});

exports.protectUpdateColaborador = (req, res, next) => {
    if (req.body.senha) {
        return next(new AppError('Esta rota não serve para atualizar senha', 401))
    }

    next()
}

exports.protectRoutes = catchAsync (async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new AppError('Voce nao está logado', 401))
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const colaborador = await Colaborador.findById(decoded.id)

    if (!colaborador) {
        return next('O usuario deste token nao existe');
    }

    next()
})