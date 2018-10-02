const uuid = require('uuid/v4');
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuarios', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuid()
            },
            identidad: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            nombre: {
                allowNull: false,
                type: Sequelize.STRING
            },
            apellido: {
                allowNull: false,
                type: Sequelize.STRING
            },
            telfijo: {
                type: Sequelize.STRING
            },
            telcelular: {
                allowNull: false,
                type: Sequelize.STRING
            },
            sexo: {
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            nomusuario: {
                type: Sequelize.STRING,
                unique: true
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            rolId: {
                type: Sequelize.UUID
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Usuarios');
    }
};