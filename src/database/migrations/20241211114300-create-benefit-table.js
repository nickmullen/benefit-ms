"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("benefit", {
      snomed: {
        type: Sequelize.DataTypes.STRING(20),
        primaryKey: true
      },
      benefit_group_id: Sequelize.DataTypes.STRING(40),
      exclusion_group_id: Sequelize.DataTypes.STRING(40),
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

    await queryInterface.addIndex("benefit", ["benefit_group_id"], {
      name: "benefit_group_id_ix",
      unique: false
    });
    await queryInterface.addIndex("benefit", ["exclusion_group_id"], {
      name: "exclusion_group_id_ix",
      unique: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("benefit");
  }
};
