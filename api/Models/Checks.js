const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('checks', {
        idChecks: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        concepto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        entry: {
            type: DataTypes.FLOAT,
            unique: false,
            allowNull: false,
            defaultValue: 0
        }
    })
}
