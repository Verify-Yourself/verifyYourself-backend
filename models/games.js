import { DataTypes, Model } from 'sequelize';
import userModel from './user.js';
import db from './index.js';

class Games extends Model {};

const model = Games.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 50], 
                notEmpty: true
            }
        },
        street: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 50], 
                notEmpty: true
            }
        }, 
        build: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1
            }
        },
        comment: {
            type: DataTypes.TEXT,
            validate: {
                len: [0, 350]
            }
        },
        starttime: {
            type: DataTypes.DATE,
            validate: {
                
            }
        },
        length: {
            type: DataTypes.INTEGER, 
            validate: {
                min: 1, 
                max: 6
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'User',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        sequelize: db,
        tableName: 'Games',
    }
);

model.belongsTo(userModel, { foreignKey: 'userId' });

export default model;