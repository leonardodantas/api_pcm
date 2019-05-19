module.exports = (app)=>{

    app.post('/pendencia', (req,res)=>{
        app.app.controller.pendencia.inserirNovaPendencia(app,req,res)
    })

    app.get('/pendencia', (req,res)=>{
        app.app.controller.pendencia.getAll(app,req,res)
    })
}