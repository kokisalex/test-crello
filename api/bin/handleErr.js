const fp = require('fastify-plugin');

const handlerError = ({ code }) => ({
  $id: `error${code}`,
  type: 'object',
  properties: {
    statusCode: { type: 'number' },
    error: { type: 'string' },
    message: { type: 'string' }
  }
});

const HTTP_BadRequest = { code: 400, message: 'Bad Request' };
const HTTP_Forbidden = { code: 403, message: 'Forbidden' };
const HTTP_NotFound = { code: 404, message: 'Not Found' };
const HTTP_RequestTimeout = { code: 408, message: 'Request Timeout' };
const HTTP_Conflict = { code: 409, message: 'Conflict' };
const HTTP_TooManyRequests = { code: 429, message: 'Too Many Requests' };

const HTTP_ERR = [
  HTTP_BadRequest,
  HTTP_Forbidden,
  HTTP_NotFound,
  HTTP_RequestTimeout,
  HTTP_Conflict,
  HTTP_TooManyRequests,
];

const httpErr = fp(async (fastify) => {
  HTTP_ERR.forEach(item => {
    fastify.addSchema(handlerError(item));
  });
});

module.exports = httpErr;
