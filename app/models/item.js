module.exports = function (sequelize, Sequelize) {
  var Item = sequelize.define("Item", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
    },

  });

  Item.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};
