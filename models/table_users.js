module.exports = (sequelize, DataTypes) => {
  const table_users = sequelize.define("table_users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return table_users;
};
