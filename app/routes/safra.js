module.exports = (app)=>{

    app.get('/safra', (req, res)=>{
        
        app.app.controller.safra.get(app,req,res);
    })

    app.put('/safra/aumentar-codigo', (req,res)=>{
        app.app.controller.safra.aumentar(app,req,res);
    })

    app.put('/safra', (req,res)=>{
        app.app.controller.safra.put(app,req,res);
    })

    
}