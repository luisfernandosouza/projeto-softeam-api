const app = require('./app.js');

const mongoose = require('mongoose');

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(db);

const port = process.env.PORT || 3000;

app.listen(port);