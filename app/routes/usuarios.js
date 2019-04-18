module.exports = (app)=>{

    app.get('/user', (req, res)=>{
        
        app.app.controller.usuario.get(app,req,res);
    })

    app.get('/userqtd', (req, res)=>{
        
        app.app.controller.usuario.getQtdId(app,req,res);
    })


    app.post('/user', (req, res)=>{

        app.app.controller.usuario.post(app,req,res)
    })

    app.post('/auth', (req,res)=>{
        
        app.app.controller.usuario.auth(app,req,res)
    })

    app.delete('/user/:id', (req,res)=>{
        app.app.controller.usuario.delete(app,req,res)
    })
}