module.exports = (app)=>{
  
    app.get('/manu_equip', (req,res)=>{
        app.app.controller.manutencao_equipamento.get(app,req,res)
    })

    app.post('/manu_equip',(req,res)=>{
        app.app.controller.manutencao_equipamento.post(app,req,res)
    })
}