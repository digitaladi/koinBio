//module express pour gerer les requetes et reponses
const express = require('express')
const favicon = require('serve-favicon')//middleware
const bodyParser = require('body-parser')//middleware
const sequelize = require("./db/db_config")
const morgan = require('morgan') //middleware
const cors = require('cors');

//dotenv permet d'aller récuperer les clés ou variables qui sont dans le fichier .env
//pour récuperer ailleurs il suffit de faire process.env.LeDeLaCle ex : process.env.JWT_SECRET
require("dotenv").config()



const app = express()
const port = 4000

//ici on synchronise le bbd et mise à jour du tableau plante
sequelize.initDb()

/*
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
*/

//permet d'accepter des données js
app.use(express.json())
app.use(cors())





//.use(bodyParser.json())
//.use(favicon(__dirname +'/assets/images/favicon.png')) //middleware pour ajouter un favicon à votre site
//.use(morgan('dev'))//middleware natif permet de console des informations sur url visité

//créer un utilisateur
require('./routes/createUser')(app)


require('./routes/login')(app)

//un middleware pour la gestion des erreurs 404
app.use(({res}) => {
    const message = 'impossible de trouver la ressource demandée ! Vous pouvez essayer un autre url'
    res.status(404).json({message})
    })


    app.listen(port, () => console.log(`Notre application node est démarrée sur : http://localhost:${port}`))





