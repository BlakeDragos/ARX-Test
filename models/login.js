/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define(
    "Login",
    {
      Email: {
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
        field: "Email"
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: "Password"
      },
      Client: {
        type: DataTypes.STRING(35),
        allowNull: false,
        field: "Client"
      },
      ClientId: {
        type: DataTypes.STRING(40),
        allowNull: false,
        field: "ClientId"
      }
    },
    {
      tableName: "login"
    }
  );
  return Login;
};
