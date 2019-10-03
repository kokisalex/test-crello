const app = require('./app');
const config = require('config');

const start = async () => {
  try {
    await app.ready();
    await app.listen(config.server.port, config.server.host);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();