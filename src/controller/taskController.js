const Task = require('../schemas/task');

// Controlador para listar todas as tarefas
const listTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar tarefas.' });
  }
};

// Controlador para criar uma nova tarefa
const createTask = async (req, res) => {
  const { title, note, isFavorite, colorTask } = req.body;
  const newTask = new Task({ title, note, isFavorite, colorTask });

  try {
    await newTask.save();
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar a tarefa.' });
  }
};

// Controlador para atualizar uma tarefa por ID
const updateTask = async (req, res) => {
  const { title, note, isFavorite, colorTask } = req.body;
  const taskId = req.params.id;

  try {
    const task = await Task.findByIdAndUpdate(taskId, { title, note, isFavorite, colorTask }, { new: true });
    
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
  }
};

// Controlador para excluir uma tarefa por ID
const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findByIdAndRemove(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    return res.status(204).send(); // Sem conteúdo na resposta
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir a tarefa.' });
  }
};

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask
};
