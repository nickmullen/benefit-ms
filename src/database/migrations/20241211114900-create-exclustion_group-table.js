module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("exclusionGroup", {
      id: {
        type: Sequelize.DataTypes.STRING(40),
        primaryKey: true
      },
      parentGroupId: Sequelize.DataTypes.STRING(40),
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("exclusionGroup");
  }
};
