const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.post('/', projectController.createProject);
router.patch('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);
router.get('/', projectController.getProjects);

module.exports = router;
