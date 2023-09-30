const express = require("express");
const app = express();
const mongoose = require('mongoose');
const taskController = require('./src/controller/taskController'); // Importe o controlador
const routes = require('./src/routes'); // Certifique-se de que o caminho para o arquivo routes.js está correto
require('./src/database/index.js');

const port = 3000;


// Middlewares para fazer o parser do corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Rotas CRUD usando o controlador
app.get('/tarefas', taskController.listTasks);
app.post('/tarefas', taskController.createTask);
app.put('/tarefas/:id', taskController.updateTask);
app.delete('/tarefas/:id', taskController.deleteTask);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
