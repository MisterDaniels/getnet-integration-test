require('dotenv').config();

require('./database');

const app = require('./app');

app.listen(process.env.SERVER_PORT || 3000, function() {
    console.log('Servidor online');
});