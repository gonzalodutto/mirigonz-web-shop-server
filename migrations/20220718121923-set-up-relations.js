module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "categoryId", {
      type: Sequelize.INTEGER,

      references: {
        model: "categories",
        key: "id",
      },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "productId", {
      type: Sequelize.INTEGER,

      references: {
        model: "products",
        key: "id",
      },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "categoryId");
    await queryInterface.removeColumn("reviews", "productId");
  },
};

// npx sequelize-cli model:generate --name review --attributes text:string,reviewerName:string
