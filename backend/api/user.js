

module.exports = app => {
       
    const save = (req, res) => {
       const user = { ...req.body}
       
       
        app.db('users')
            .insert(user)
            .catch(err => res.send(err))
            .then(_ => res.status(204).send())

       
    }

    const get  = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'adm', 'password')
            .then(users => res.json(users))
            .catch(err => res.send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'password', 'email', 'adm')
            .where({id: req.params.id})
            .then(user => res.json(user))
            .catch(err => res.send(err))
    }

    const remove = (req, res) => {
       
        app.db('users')
            .where({id: req.params.id}) 
            .del()
            .then(res.status(204).send())
    }
    const update = (req, res) => {
          

            if(req.params.id) user.id = req.params.id

        app.db('users')
            .update(user)
            .where({id: req.params.id})
            .then(_ => res.status(200).send())
            .catch(err => res.send(err))
    }

    return { save, get, getById, remove, update}
}