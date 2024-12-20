module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "benefitGroup",
      {
        id: {
          type: Sequelize.DataTypes.STRING(40),
          primaryKey: true
        },
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
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci"
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("benefitGroup");
  }
};
