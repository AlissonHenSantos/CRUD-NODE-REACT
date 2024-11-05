

module.exports = app => {

    const save = (req, res) => {
       const user = { ...req.body }
        user.adm = false
        try{
        
    
        
            if (!user.name) {
                res.status(422).send( "Nome é obrigatorio" )
            } else if (!user.email) {
                res.status(422).send("Email é obrigatorio" )
            } else if (!user.password) {
                res.status(422).send("A senha é obrigatorio" )
            } else if (user.confirmPassword !== user.password) {
                res.status(422).send("as senhas não sao iguals " )
            }


     

        delete user.confirmPassword



        app.db('users')
            .insert(user)
            .then(_ => res.status(200).send('usuario cadastrado'))
            
       }
       catch(e){
        
       }

    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'adm', 'password')
            .orderBy('id')
            .catch(err => res.send(err))
            .then(users => res.json(users))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'password', 'email', 'adm')
            .where({ id: req.params.id })
            .then(user => res.json(user))
            .catch(err => res.send(err))
    }

    const remove = (req, res) => {

        app.db('users')
            .where({ id: req.params.id })
            .del()
            .then(res.status(204).send())
    }
    const update = (req, res) => {
        const user = { ...req.body }

        if (req.params.id) user.id = req.params.id

        app.db('users')
            .update(user)
            .where({ id: req.params.id })
            .then(_ => res.status(204).send())
            .catch(err => res.send(err))
    }

    return { save, get, getById, remove, update }
}