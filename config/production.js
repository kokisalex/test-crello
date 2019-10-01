const config = {};

config.env = 'production';

config.server = {
  port: 80,
  host: '0.0.0.0',
};

config.mongoDB = {
  url: 'localhost:27017'
}

module.exports = config;