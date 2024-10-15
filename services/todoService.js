const Todo = require('../models/todoModel');

exports.createTodo = async (todoData) => {
  const todo = new Todo(todoData);
  return await todo.save();
};

exports.getTodos = async () => {
  return await Todo.find();
};

exports.updateTodo = async (id, todoData) => {
  return await Todo.findByIdAndUpdate(id, todoData, { new: true });
};

exports.deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};
