module.exports = (app)=>{

    app.get('/funcao', (req, res)=>{
        
        app.app.controller.funcoes.get(app,req,res);
    })

    app.post('/funcao', (req, res)=>{
        
        app.app.controller.funcoes.post(app,req,res)
    })

    app.delete('/funcao/:id', (req, res)=>{
        
        app.app.controller.funcoes.delete(app,req,res)
    })
    app.put('/funcao', (req, res)=>{
        
        app.app.controller.funcoes.put(app,req,res)
    })

}