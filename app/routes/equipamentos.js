module.exports = (app)=>{
  
    app.get('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.get(app,req,res)
    })

    app.post('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.post(app,req,res)
    })
    
    app.put('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.put(app,req,res)
    })

    app.delete('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.delete(app,req,res)
    })
}