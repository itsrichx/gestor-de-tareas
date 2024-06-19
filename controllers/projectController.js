const { Project } = require('../models');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).send();
    }
    await project.update(req.body);
    res.send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).send();
    }
    await project.destroy();
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};
