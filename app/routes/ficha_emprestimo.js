module.exports = (app)=>{
  
   app.post('/ficha_emprestimo', (req,res)=>{
       app.app.controller.ficha_emprestimo.post(app,req,res)   
   })

   app.get('/ficha_emprestimo/espera_all', (req,res)=>{
    app.app.controller.ficha_emprestimo.aguardandoAll(app,req,res)
    
   })

   app.get('/ficha_emprestimo/:id', (req,res)=>{
    app.app.controller.ficha_emprestimo.aguardando(app,req,res)   
   })

  

   
}