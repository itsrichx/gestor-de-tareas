const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.post('/projects', projectController.createProject);
router.patch('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);
router.get('/projects', projectController.getProjects);

module.exports = router;
