const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('user', {
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            required: true,
        }
    })
}
