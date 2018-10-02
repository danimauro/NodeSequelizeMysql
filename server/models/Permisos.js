'use strict';
module.exports = (sequelize, DataTypes) => {
    const Permisos = sequelize.define('Permisos', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        create: DataTypes.BOOLEAN,
        read: DataTypes.BOOLEAN,
        update: DataTypes.BOOLEAN,
        delete: DataTypes.BOOLEAN
    }, {});
    Permisos.associate = function(models) {
        //un permiso tiene muchos roles
        Permisos.hasMany(models.Rol);
    };
    return Permisos;
};