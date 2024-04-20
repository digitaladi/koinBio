const bcrypt = require("bcrypt")

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
            type: DataTypes.STRING,
            allowNull: true
          
        }

    },

    {
        //permet de hasher un mot de passe avant de s'incrire
        hooks: {
         beforeCreate: async (user) => {
          if (user.password) {
           const salt = await bcrypt.genSaltSync(10, 'a');
           user.password = bcrypt.hashSync(user.password, salt);
          }
         },
         //permet de hasher un mot de passe avant de modifier son compte
         beforeUpdate:async (user) => {
          if (user.password) {
           const salt = await bcrypt.genSaltSync(10, 'a');
           user.password = bcrypt.hashSync(user.password, salt);
          }
         }
        }
   /*     ,
        instanceMethods: {
         validPassword: (password) => {
          return bcrypt.compareSync(password, this.password);
         }
        }*/
       }

    
)











}