/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Sessions = sequelize.define(
    "Sessions",
    {
      userName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "login",
          key: "UserName"
        },
        field: "UserName"
      },
      output: {
        type: DataTypes.INTEGER(5000),
        allowNull: false,
        field: "output"
      },
      set: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: "set"
      },
      contactInfo: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "ContactInfo"
      },
      bio: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "I'M A LOSSER",
        field: "Bio"
      }
    },
    {
      tableName: "sessions"
    }
  );

  return Sessions;
};
