const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/proyecto_yajaira';

mongoose.connect(URI)
  .then(db => console.log('Db is connection mongo'))
  .catch(error => console.error(error));

module.exports = mongoose;