

//const { Sequelize, DataTypes } = require("sequelize");
//Model user (création de la table User)
//le modele va créer automatiquement la colonne created et updated
module.exports = (Sequelize, DataTypes) => {

    return Sequelize.define("User",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            unique: {
                msg: 'cet identifiant existe déja'
            }
        },

        password: {
            type: DataTypes.String,
            allowNull: false
        }

    })

}