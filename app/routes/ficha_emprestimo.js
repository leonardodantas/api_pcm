module.exports = (app)=>{
  
   app.post('/ficha_emprestimo', (req,res)=>{
       app.app.controller.ficha_emprestimo.post(app,req,res)   
   })

   app.put('/ficha_emprestimo/aceitar', (req,res)=>{
    app.app.controller.ficha_emprestimo.aceitar(app,req,res)   
    })

   app.put('/ficha_emprestimo/recusar', (req,res)=>{
    app.app.controller.ficha_emprestimo.recusar(app,req,res)   
    })

   app.get('/ficha_emprestimo/espera_all', (req,res)=>{
    app.app.controller.ficha_emprestimo.aguardandoAll(app,req,res)
    
   })

   app.get('/ficha_emprestimo/:id', (req,res)=>{
    app.app.controller.ficha_emprestimo.aguardando(app,req,res)   
   })

   app.get('/ficha_emprestimo/liberadas/:id', (req,res)=>{
    app.app.controller.ficha_emprestimo.liberadas(app,req,res)   
   })

   app.get('/ficha_emprestimo/all/alugadas', (req,res)=>{

    app.app.controller.ficha_emprestimo.getAllAlugadas(app,req,res)   
   })

   app.get('/ficha_emprestimo/all/finalizadas', (req,res)=>{

    app.app.controller.ficha_emprestimo.getAllFinalizadas(app,req,res)   
   })

   app.get('/ficha_emprestimo/all/:id', (req,res)=>{
    app.app.controller.ficha_emprestimo.all(app,req,res)   
   })

   app.get('/ficha_emprestimo/rejeitadas/:id', (req,res)=>{
    app.app.controller.ficha_emprestimo.rejeitadas(app,req,res)   
   })

   app.put('/ficha_emprestimo/devolver', (req,res)=>{
    app.app.controller.ficha_emprestimo.devolver(app,req,res)   
   })
   

   
  

   
}