import { Router } from 'express';

import {Todo} from '../models/todoModel';

const router = Router();

let todos: Todo[] = [];

type RequestBody = { text: string };
type RequestParams = { todoId: string};

router.get('/', (req, res, next) => {

    res.status(200).json({todos: todos})
});

router.post('/addTodo', (req, res, next) => {

    const body = req.body as RequestBody;

    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo);

    res.json({ 
        message: 'Added Todo', 
        newTodo, 
        todos:todos 
    })
});

router.put('/editTodo/:todoId', (req, res, next) => {

    const body = req.body as RequestBody;
    const params = req.params as RequestParams;

    const todoId = params.todoId;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if(todoIndex >= 0) {

       todos[todoIndex] = { id: todoId, text: body.text };

       return res.status(200).json({ message: 'Todo edited', todos: todos});
    }

    res.status(404).json({message: 'todo not found'});
});

router.delete('/deleteTodo/:todoId', (req, res, next) => {

    const params = req.params as RequestParams;

    todos = todos.filter((todo) => todo.id !== params.todoId);

    res.status(200).json({todos: todos});
});

export default router;