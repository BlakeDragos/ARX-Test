/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Sessions = sequelize.define(
    "Sessions",
    {
      Client: {
        type: DataTypes.STRING(35),
        allowNull: false,
        field: "Client"
      },
      ClientId: {
        type: DataTypes.STRING(40),
        allowNull: false,
        field: "ClientId"
      },
      Exercise: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: "Exercise"
      },
      Protocol: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: "Protocol"
      },
      MovementMode: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "MovementMode"
      },
      MotorSpeed: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: "MotorSpeed"
      },
      StartPosition: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "StartPosition"
      },
      EndPosition: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "EndPosition"
      },
      StartToEndTime: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "StartToEndTime"
      },
      PauseAfterEndPosition: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "PauseAfterEndPosition"
      },
      EndToStartSpeed: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "EndToStartSpeed"
      },
      PauseAfterStartPosition: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "PauseAfterStartPosition"
      },
      NumOfReps: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "NumOfReps"
      },
      CoutdownTimer: {
        type: DataTypes.FLOAT(5),
        allowNull: true,
        field: "CoutdownTimer"
      },
      Finished: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: "Finished"
      },
      ExerciseTime: {
        type: DataTypes.TIME,
        allowNull: false,
        field: "ExerciseTime"
      },
      Intensity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "Intensity"
      },
      Max: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "Max"
      },
      Output: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "Output"
      },
    },
    {
      tableName: "sessions"
    }
  );

  return Sessions;
};
