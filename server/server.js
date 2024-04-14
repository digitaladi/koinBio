//module express pour gerer les requetes et reponses
const express = require('express')

const sequelize = require("./db/sequelize")

const app = express()
const port = 4000

//ici on synchronise le bbd et mise à jour du tableau plante
sequelize.initDb()

console.log(port)

require('./routes/createUser')(app)


//un middleware pour la gestion des erreurs 404
app.use(({res}) => {
    const message = 'impossible de trouver la ressource demandée ! Vous pouvez essayer un autre url'
    res.status(404).json({message})
    })


    app.listen(port, () => console.log(`Notre application node est démarrée sur : http://localhost:${port}`))