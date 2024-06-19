'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING
  }, {});
  
  Project.associate = function(models) {
    Project.hasMany(models.Task, { foreignKey: 'projectId' });
    Project.belongsToMany(models.User, { through: 'UserProjects' });
  };
  
  return Project;
};
