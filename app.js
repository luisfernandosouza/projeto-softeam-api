const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const express = require('express');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const empresaRoutes = require('./routes/empresaRoutes')


const globalErrorHandle = require('./controllers/errorController');
const app = express();
app.use(express.json());

app.use('/api/v1/colaborador', colaboradorRoutes);
app.use('/api/v1/empresa', empresaRoutes);

app.use(globalErrorHandle.errorHandle);

module.exports = app;