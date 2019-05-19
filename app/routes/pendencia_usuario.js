module.exports = (app)=>{

    app.post('/pendencia_usuario', (req,res)=>{
        app.app.controller.pendencia_usuario.inserirNovo(app,req,res)
    })

    app.get('/pendencia_usuario/:id', (req,res)=>{
        app.app.controller.pendencia_usuario.getAllUserPend(app,req,res)
    })
}