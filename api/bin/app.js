const fastify = require('fastify')({ ignoreTrailingSlash: true, logger: false });
const fastifyMongoDB = require('fastify-mongodb');
const fastifyCORS = require('fastify-cors');
const config = require('config');
const apiRoutes = require('../api-routes');
const httpErr = require('./handleErr');

fastify.register(fastifyMongoDB, {
  ...config.mongoDB,
})

fastify.register(fastifyCORS);

fastify.register(httpErr);

fastify.register(apiRoutes, { prefix: '/api' })


module.exports = fastify;