module.exports = app => {

    app.route('/users')
        .get(app.api.user.get)
        .post(app.api.user.save)

    app.route('/users/:id')
        .get(app.api.user.getById)
        .delete(app.api.user.remove)
        .put(app.api.user.update)
}