const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const express = require('express');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const globalErrorHandle = require('./controllers/errorController').errorHandle;
const app = express();
app.use(express.json());

app.use('/api/v1/colaborador', colaboradorRoutes)

app.use(globalErrorHandle);

module.exports = app;