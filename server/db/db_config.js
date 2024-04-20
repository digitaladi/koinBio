const { Sequelize, DataTypes } = require('sequelize')



//le model user
const userModele = require("../models/user")


//configuration de la base de données
const sequelize = new Sequelize(
    'koinbio',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }  
)



//tester la connexion a la bdd
sequelize.authenticate()
.then(_ => console.log('la connexion à la base de données koinbio a été établie'))
.catch(error => console.log(`Impossible de se connecter à la base de données ${error}`))


const User = userModele(sequelize, DataTypes)
const initDb = () => {
    return sequelize.sync({force: false})
    .then(_=> {

    console.log('la base de données koinbio a été initialisée')
    
    })
    
    }

module.exports = {
    initDb, User
} 