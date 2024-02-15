const express = require('express')

const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.showTasks)
router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
// router.put('/:id', TaskController.updateTask)
// router.delete('/:id', TaskController.deleteTask)

module.exports = router
