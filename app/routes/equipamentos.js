module.exports = (app)=>{
  
    app.get('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.get(app,req,res)
    })

    app.get('/equipamento/livre', (req,res)=>{
        app.app.controller.equipamentos.getLivre(app,req,res)
    })

    app.get('/equipamentos', (req,res)=>{
        app.app.controller.equipamentos.getAll(app,req,res)
    })

    app.post('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.post(app,req,res)
    })

    app.put('/equipamento_atualizar', (req,res)=>{
        app.app.controller.equipamentos.atualizarEquip(app,req,res)
    })
    
    app.put('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.put(app,req,res)
    })

    app.delete('/equipamento', (req,res)=>{
        app.app.controller.equipamentos.delete(app,req,res)
    })
}