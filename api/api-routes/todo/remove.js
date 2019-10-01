const remove = async (fastify) => {
  fastify.delete('/todo/:id', {
    schema: {
      response: {
        200: 'todoRemove#',
        404: 'error404#'
      }
    }
  }, async (req, replay) => {
    const { id } = req.params;
    const { db, ObjectId } = fastify.mongo;
    const { value } = await db.collection('todo').findOneAndDelete({ _id: ObjectId(id) })
    if (value) {
      return { _id: value._id };
    }
    const err = new Error('Not Found');
    err.statusCode = 404;
    throw err;

  })
}

module.exports = remove;