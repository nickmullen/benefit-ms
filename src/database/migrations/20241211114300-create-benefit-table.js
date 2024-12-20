"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "benefit",
      {
        snomed: {
          type: Sequelize.DataTypes.STRING(20),
          primaryKey: true
        },
        benefitGroupId: Sequelize.DataTypes.STRING(40),
        exclusionGroupId: Sequelize.DataTypes.STRING(40),
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

    await queryInterface.addIndex("benefit", ["benefitGroupId"], {
      name: "benefitGroupId_ix",
      unique: false
    });

    await queryInterface.addIndex("benefit", ["exclusionGroupId"], {
      name: "exclusionGroupId_ix",
      unique: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("benefit");
  }
};
