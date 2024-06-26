import { DataTypes, Model } from 'sequelize';
import db from './index.js';
import Game from './game.js';
import Member from './member.js';

class User extends Model {};

const model = User.init(
    {
       id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
       },
       username: {
        type: DataTypes.TEXT,
        unique: true,
        validate: {
            len: [6, 25],
            notEmpty: true,
        }
       },
       firstname: {
        type: DataTypes.TEXT,
        validate: {
            len: [1, 25],
            notEmpty: true
        }
       },
       lastname: {
        type: DataTypes.TEXT,
        validate: {
            len: [1, 25],
            notEmpty: true
        }
       },
       surname: {
        type: DataTypes.TEXT,
        validate: {
            len: [1, 25],
            notEmpty: true
        }
       },
       birthday: {
        type: DataTypes.DATEONLY,
        validate: {
            notEmpty: true
        }
       },
       phone: {
        type: DataTypes.STRING,
        validate: {
            is: /^\+[0-9]{11}$/,
            notEmpty: true
        }
       },
       email: {
        type: DataTypes.TEXT,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
       },
       password: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            min: 8
        }
       }
    },
    {
        sequelize: db,
        tableName: 'User',
        timestamps: false,
    }
);

model.hasMany(Game, { foreignKey: 'creatorId' });
model.hasMany(Member, {foreignKey: 'userId'});

export default model;