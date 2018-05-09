/* eslint-disable no-console */

const mongoose = require('mongoose');

const app = require('./src/app.js');
const config = require('./config');

mongoose.Promise = global.Promise;

mongoose
  .connect(config.db)
  .then(() => console.log('Conectado a MongoDB satisfatoriamente.'))
  .then(() => app.listen(config.port, () => console.log(`Servidor con entorno ${config.env} corriendo en http://localhost:${config.port}`)))
  .catch(error => console.error(`Error encontrado: ${error}`));

module.exports = { server: app };
