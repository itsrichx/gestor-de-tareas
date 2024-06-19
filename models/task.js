'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('pending', 'in progress', 'completed'),
      defaultValue: 'pending'
    }
  }, {});
  
  Task.associate = function(models) {
    Task.belongsTo(models.Project, { foreignKey: 'projectId' });
    Task.belongsTo(models.User, { foreignKey: 'assignedTo' });
  };
  
  return Task;
};
