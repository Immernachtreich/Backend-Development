"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/addTodo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.json({
        message: 'Added Todo',
        newTodo,
        todos: todos
    });
});
router.put('/editTodo/:todoId', (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todoId, text: req.body.text };
        return res.status(200).json({ message: 'Todo edited', todos: todos });
    }
    res.status(404).json({ message: 'todo not found' });
});
router.delete('/deleteTodo/:todoId', (req, res, next) => {
    todos = todos.filter((todo) => todo.id !== req.params.todoId);
    res.status(200).json({ todos: todos });
});
exports.default = router;
