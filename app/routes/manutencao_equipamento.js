module.exports = (app)=>{
  
    app.get('/manu_equip', (req,res)=>{
        app.app.controller.manutencao_equipamento.get(app,req,res)
    })

    app.get('/manu_equip/all', (req,res)=>{
        app.app.controller.manutencao_equipamento.getAll(app,req,res)
    })

    app.get('/manu_equip/started', (req,res)=>{
        app.app.controller.manutencao_equipamento.started(app,req,res)
    })

    app.get('/manu_equip/finally', (req,res)=>{
        app.app.controller.manutencao_equipamento.finally(app,req,res)
    })

    app.post('/manu_equip',(req,res)=>{
        app.app.controller.manutencao_equipamento.post(app,req,res)
    })

    app.put('/manu_equip',(req,res)=>{
        app.app.controller.manutencao_equipamento.put(app,req,res)
    })

    app.put('/manu_equip/finally', (req,res)=>{
        app.app.controller.manutencao_equipamento.atualizar(app,req,res)
    })
}