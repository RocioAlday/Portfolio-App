require('dotenv').config();
var { PORT } = process.env;
const server = require('./src/app.js');

server.listen(PORT, () => {
    console.log(`%s listening at ${PORT} PORT`); // eslint-disable-line no-console
  });
