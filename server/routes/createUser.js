const { User } = require("../db/db_config")


module.exports = (app) => {
    app.post('/koinbio/register', (req, res) =>{

        User.create(req.body)
        .then(plante =>{
            const message = 'Un plante a été bien ajoutée'
            res.json({ message, data: plante })
        })

        .catch(error =>{
            const message = "La plante n'a pas pu etre ajouté! Réessayer dans quelques instants"
            res.status(500).json({message:error.message, data:error})
        })

      //  console.log(req)
    })
}