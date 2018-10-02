'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define('Usuarios', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        identidad: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telfijo: DataTypes.STRING,
        telcelular: DataTypes.STRING,
        sexo: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nomusuario: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    Usuarios.associate = function(models) {
        //Un usurio tiene un rol
        Usuarios.belongsTo(models.Rol, { foreignKey: 'rolId', onDelete: 'CASCADE' });
    };
    return Usuarios;
};