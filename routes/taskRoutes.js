const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.post('/', taskController.createTask);
router.patch('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.get('/', taskController.getTasks);

module.exports = router;
