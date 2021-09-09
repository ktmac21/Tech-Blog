const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
            
            comment_content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
        
            date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
            },
        
        
            user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        
            blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blog_post',
                key: 'id',
            },
        },
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    },
);

module.exports = Comments;
