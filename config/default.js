const config = {};

config.env = 'development';

config.server = {
  port: 3030,
  host: '0.0.0.0',
};

config.mongoDB = {
  forceClose: true,
  url: 'mongodb://127.0.0.1:27017/todo'
}



module.exports = config;