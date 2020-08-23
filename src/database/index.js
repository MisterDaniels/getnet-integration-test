const mongoose = require('mongoose');

const url = process.env.DB_ATLAS ? 
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority` :
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => {
        console.log('Conectado ao banco');
    })
    .catch((err) => {
        console.log(err);
    });