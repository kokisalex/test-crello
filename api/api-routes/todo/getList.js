const get = async (fastify) => {
  fastify.get('/todo', {
    schema: {
      querystring: 'todoQuery#',
      response: {
        200: 'todoList#',
        404: 'error404#',
      }
    }
  }, async (req, replay) => {
    const {
      archive
    } = req.query    
    const { db } = fastify.mongo;
    return await db.collection('todo').find({ archive }).toArray()
  })
}

module.exports = get;