const uuid = require('uuid/v4');
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Rols', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuid()
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            descrip: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            permisoId: {
                type: Sequelize.UUID
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Rols');
    }
};