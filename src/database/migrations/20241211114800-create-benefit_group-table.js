module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("benefit_group", {
      id: {
        type: Sequelize.DataTypes.STRING(40),
        primaryKey: true
      },
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
    return queryInterface.dropTable("benefit_group");
  }
};
