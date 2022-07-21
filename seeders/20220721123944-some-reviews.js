"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          text: "I would like to have it in purple. How can I do? Thanks.",
          reviewerName: "Miriam",
          productId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "I like candy's",
          reviewerName: "Bob",
          productId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Hi man!",
          reviewerName: "Gonzalo",
          productId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
