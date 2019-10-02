const todoId = {
  $id: 'todoId',
  type: 'object',
  required: [
    'title',
    'body',
  ],
  properties: {
    _id: { type: 'string' },
    title: { type: 'string', minLength: 5 },
    body: { type: 'string', minLength: 10 },
    archive: {
      type: 'boolean',
      default: false
    },
    date: {
      type: 'string',
      default: new Date().toISOString()
    }
  }
}

const todoList = {
  $id: 'todoList',
  type: 'array',
  items: 'todoId#'
}

const todoRemove = {
  $id: 'todoRemove',
  type: 'object',
  properties: {
    _id: { type: 'string' },
  }
}


module.exports = {
  todoId,
  todoList,
  todoRemove,
};