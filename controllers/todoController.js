const todoService = require("../services/todoService");

exports.createTodo = async (event) => {
    try{
      const data = JSON.parse(event.body);
      const todo = await todoService.createTodo(data);
      return {
        statusCode: 200,
        body: JSON.stringify(todo)
      }
    }catch(error){
        return {
            statusCode:500,
            body: error.toString()
        }
    }
}

exports.getTodos = async () => {
    try {
      const todos = await todoService.getTodos();
      return { statusCode: 200, body: JSON.stringify(todos) };
    } catch (err) {
      return { statusCode: 500, body: err.toString() };
    }
  };
  
exports.getTodo = async (event) => {
  try{
    const id = event.queryStringParameters.id;
    const todo = await todoService.getTodo(id);
    if(!todo){
      return {
        statusCode: 404,
        body: JSON.stringify({"message":"Todo not found."})
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify(todo)
    }
  } catch(error){
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
  
}
  exports.updateTodo = async (event) => {       //  http://localhost:3000/dev/update-todo/2323093023
    try {
      const id = event.pathParameters.id;
      const data = JSON.parse(event.body);
      const todo = await todoService.updateTodo(id, data);
      return { statusCode: 200, body: JSON.stringify(todo) };
    } catch (err) {
      return { statusCode: 500, body: err.toString() };
    }
  };
  
  exports.deleteTodo = async (event) => {     // 
    try {
        const id = event.queryStringParameters.id;
      const todo = await todoService.deleteTodo(id);
      if (!todo) {
        return { statusCode: 404, body: JSON.stringify({"message":"Todo not found."}) };
      }
      return { statusCode: 204, body: JSON.stringify({"message":"Todo deleted successfully."}) };
    } catch (err) {
      return { statusCode: 500, body: JSON.stringify(err) };
    }
  };