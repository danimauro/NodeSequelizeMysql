'use strict';
module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },

        nombre: {
            type: DataTypes.STRING,
            unique: true
        },
        descrip: DataTypes.STRING
    }, {});
    Rol.associate = function(models) {
        // El rol le pertenece a un usuario
        Rol.belongsTo(models.Permisos, { foreignKey: 'permisoId', onDelete: 'CASCADE' });

    };
    return Rol;
};