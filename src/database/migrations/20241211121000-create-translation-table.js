module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("translation", {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      entityId: Sequelize.DataTypes.STRING(40),
      language: {
        type: Sequelize.DataTypes.STRING(2),
        allowNull: false
      },
      value: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.ENUM,
        values: ["name", "description"]
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
    });

    await queryInterface.addIndex("translation", ["entityId"], {
      name: "entitiyId_ix",
      unique: false
    });

    await queryInterface.addIndex("translation", ["value"], {
      name: "valueFulltext_ix",
      type: "FULLTEXT"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("translation");
  }
};
