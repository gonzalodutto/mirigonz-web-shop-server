"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Piet",
          email: "p@p.com",
          password: bcrypt.hashSync("123456", 10),
          // bcrypt.hashSync(password, 10)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miriam",
          email: "m@m.com",
          password: bcrypt.hashSync("miriam", 10),
          // bcrypt.hashSync(password, 10)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gonzalo",
          email: "g@g.com",
          password: bcrypt.hashSync("gonzalo", 10),
          // bcrypt.hashSync(password, 10)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
