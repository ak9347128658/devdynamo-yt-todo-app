const todoController = require('../controllers/todoController');
const connectDB = require('../utilities/db');

// create a test here to check the http method, event.body, query string, and path parameters
module.exports.handler = async (event, context) => {
  console.log('event', event);
  // how to check the http method
  console.log('http method', event.httpMethod);
  // how to check the event body
  console.log('body', event.body);
  // how to make the body an object
  const body = JSON.parse(event.body);
  console.log('body as object', body);
  // how to check the query string parameters
  console.log('query string', event.queryStringParameters);
  // how to check the path parameters
  console.log('path parameters', event.pathParameters);
  console.log('context', context);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from the todo handler',
    }),
  };
}


module.exports.create = async (event, context) => {
  await connectDB();
  return todoController.createTodo(event);
};

module.exports.get = async  (event, context) => {
  await connectDB();
  return todoController.getTodos();
};

module.exports.update = async (event, context) => {
  connectDB();
  return todoController.updateTodo(event);
};

module.exports.delete = async (event, context) => {
  connectDB();
  return todoController.deleteTodo(event);
};
