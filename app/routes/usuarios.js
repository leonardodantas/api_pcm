module.exports = (app)=>{

    app.get('/user', (req, res)=>{
        
        app.app.controller.usuario.get(app,req,res);
    })

    app.post('/user', (req, res)=>{

        app.app.controller.usuario.post(app,req,res)
    })
}