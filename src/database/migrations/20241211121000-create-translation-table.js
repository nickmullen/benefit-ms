module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("translation", {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      entity_id: Sequelize.DataTypes.STRING(40),
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

    await queryInterface.addIndex("translation", ["entity_id"], {
      name: "entitiy_id_ix",
      unique: false
    });

    await queryInterface.addIndex("translation", ["value"], {
      name: "value_fulltext_ix",
      type: "FULLTEXT"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("translation");
  }
};
