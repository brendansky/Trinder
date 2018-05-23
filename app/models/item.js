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

    image: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
    },

  });

  return Item;
};
