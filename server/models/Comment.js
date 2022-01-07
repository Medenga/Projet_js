const { Model, DataTypes } = require("sequelize");
const connection = require("../lib/db");

class Article extends Model { }

Comment.init(
    {

        content: { Type: DataTypes.STRING, allowNull: false },
        authorld: { Type: DataTypes.STRING, allowNull: false },
        articleld: { Type: DataTypes.STRING, allowNull: false },
        createdAt: { Type: DataTypes.DATE, allowNull: false },
        updateAt: { Type: DataTypes.DATE, allowNull: false },
        deleteAt: { Type: DataTypes.DATE, allowNull: false, default: false },

    },
    {
        sequelize: connection,
        modelName: "Comment",
    }
);

connection.sync().then(() => {
    console.log("Database synced");
});

module.exports = Comment;
