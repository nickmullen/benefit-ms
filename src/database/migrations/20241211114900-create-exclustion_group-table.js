module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("exclusion_group", {
      id: {
        type: Sequelize.DataTypes.STRING(40),
        primaryKey: true
      },
      parent_group_id: Sequelize.DataTypes.STRING(40),
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("exclusion_group");
  }
};
