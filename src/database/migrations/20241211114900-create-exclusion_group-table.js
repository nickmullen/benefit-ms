module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "exclusionGroup",
      {
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
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci"
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("exclusionGroup");
  }
};
