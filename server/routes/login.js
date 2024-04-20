const { User } = require("../db/db_config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")






module.exports = (app) => {
    app.post('/koinbio/login', (req, res) =>{

    User.findOne({where: { email: req.body.email  }})
    .then(user => {

        
        if(!user){
            const message = "L'utilisateur demandé n'existe pas"
            return res.status(404).json({message})
        }

        //ON COMPARE le mot du passe de la requete et la mot de passe du user
        bcrypt.compare(req.body.password, user.password)
        .then(isPasswordIsValid =>{

            if(!isPasswordIsValid){
                const message = "le mot de passe est incorrect"
                return res.status(404).json({message})
            }

            //on récupére l'email qu'on ajoute au token
            const payload = { email: user.email }

            //on génére notre token
            const token =jwt.sign(payload, process.env.JWT_SECRET)

            //et on se connecte
            const message = " Vous  étes connecté "
            res.json({ message, data: user, token })

        })
    })
})
}




