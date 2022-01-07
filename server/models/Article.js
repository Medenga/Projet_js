const { Model, DataTypes } = require("sequelize");
const connection = require("../lib/db");


class Article extends Model { }

Article.init(
    {
        title: { Type: DataTypes.STRING, allowNull: false },
        content: { Type: DataTypes.STRING, allowNull: false },
        tags: { Type: DataTypes.STRING, allowNull: false },
        authorld: { Type: DataTypes.STRING, allowNull: false },
        createdAt: { Type: DataTypes.DATE, allowNull: false },
        updateAt: { Type: DataTypes.DATE, allowNull: false },
        deleteAt: { Type: DataTypes.DATE, allowNull: false, default: false },

    },
    {
        sequelize: connection,
        modelName: "Article",
    }
);


module.exports = Article;
