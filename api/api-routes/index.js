const todoSchema = require('./todo/schema');
const createTodo = require('./todo/create');
const getTodoList = require('./todo/getList');
const removeTodo = require('./todo/remove');
const upgradeTodo = require('./todo/upgrade');


module.exports = async (fastify) => {
  await fastify.addSchema(todoSchema.todoGetQuery)
  await fastify.addSchema(todoSchema.todoId)
  await fastify.addSchema(todoSchema.todoList)
  await fastify.addSchema(todoSchema.todoRemove)
  await fastify.register(createTodo);
  await fastify.register(getTodoList);
  await fastify.register(removeTodo);
  await fastify.register(upgradeTodo);
}