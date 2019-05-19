 const db = require('../../config/dbConnection')

 module.exports.post = function(app,req,res){

    let connection = db();
    let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

    ficha_emprestimo.post(req,(err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
      
    })
    
 }

 module.exports.recusar = function(app,req,res){

   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.recusar(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.aceitar = function(app,req,res){

   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.aceitar(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

 module.exports.aguardando = function(app,req,res){

   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.aguardando(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}
module.exports.aguardandoAll = function(app,req,res){
   
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.aguardandoAll((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.liberadas = function(app,req,res){
  
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.liberadas(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.devolver = function(app,req,res){
  
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.devolver(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.all = function(app,req,res){
   
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.all(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.getAllAlugadas = function(app,req,res){
  
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.getAllAlugadas((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.getAllFinalizadas = function(app,req,res){
  
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.getAllFinalizadas((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.rejeitadas = function(app,req,res){
   
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.rejeitadas(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}


 