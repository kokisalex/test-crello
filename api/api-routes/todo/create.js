const create = async (fastify) => {
  fastify.post('/todo', {
    schema: {
      body: 'todoId#',
      response: {
        200: 'todoId#',
        400: 'error400#',
        409: 'error409#'
      }
    }
  }, async (req) => {
    const { body } = req;
    body.archive = false;
    body.date = new Date().toISOString();
    const { db } = fastify.mongo;
    const { insertedId: _id } = await db.collection('todo').insertOne(body);
    Object.assign(body, { _id });
    return body
  })
}

module.exports = create;