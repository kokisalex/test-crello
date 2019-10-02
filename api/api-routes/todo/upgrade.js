const upgrade = async (fastify) => {
  fastify.patch('/todo/:id', {
    schema: {
      response: {
        200: 'todoId#',
        404: 'error404#'
      }
    }
  }, async (req) => {
    const {
      params: {
        id,
      },
      body
    } = req
    const { db, ObjectId } = fastify.mongo;
    const { value } = await db.collection('todo').findOneAndUpdate({ _id: ObjectId(id) }, { $set: body }, { returnOriginal: false })
    if (value) {
      return value;
    }
    const err = new Error('Not Found');
    err.statusCode = 404;
    throw err;

  })
}

module.exports = upgrade;