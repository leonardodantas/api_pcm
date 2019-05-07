 const db = require('../../config/dbConnection')

 module.exports.post = function(app,req,res){

    let connection = db();
    let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

    ficha_emprestimo.post(req,(err,data)=>{
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
   console.log('aqui')
   let connection = db();
   let ficha_emprestimo = new app.app.models.ficha_emprestimo(connection)

   ficha_emprestimo.aguardandoAll((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}


 