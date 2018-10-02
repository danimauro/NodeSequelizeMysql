const uuid = require('uuid/v4');
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Permisos', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuid()
            },
            create: {
                type: Sequelize.BOOLEAN
            },
            read: {
                type: Sequelize.BOOLEAN
            },
            update: {
                type: Sequelize.BOOLEAN
            },
            delete: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Permisos');
    }
};