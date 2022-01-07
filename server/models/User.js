const { Model, DataTypes } = require("sequelize");
const connection = require("../lib/db");
const bcrypt = require("bcryptjs");

class User extends Model { }

User.init(
  {
    lastname: { type: DataTypes.STRING, allowNull: false },
    firstname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false },
    createdAt: { Type: DataTypes.DATE, allowNull: false },
    updateAt: { Type: DataTypes.DATE, allowNull: false },
    deleteAt: { Type: DataTypes.DATE, allowNull: false, default: false },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);
