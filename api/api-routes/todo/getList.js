const get = async (fastify) => {
  fastify.get('/todo', {
    schema: {
      response: {
        200: 'todoList#',
        404: 'error404#',
      }
    }
  }, async (req, replay) => { 
    const { db } = fastify.mongo;
    return await db.collection('todo').find().toArray()
  })
}

module.exports = get;