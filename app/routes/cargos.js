module.exports = (app)=>{

    app.get('/cargos', (req, res)=>{
        
        app.app.controller.cargos.get(app,req,res);
    })

}