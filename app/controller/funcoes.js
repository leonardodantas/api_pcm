 const db = require('../../config/dbConnection')

 module.exports.get = function(app,req,res){

    let connection = db();
    let funcoes = new app.app.models.funcoes(connection)

    funcoes.get((err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
      
    })
  
 }

 module.exports.post = function(app, req,res){
   
    let connection = db()
    let funcoes = new app.app.models.funcoes(connection)

    funcoes.post(req,(err, data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)   
    })
 }

 module.exports.delete = function(app, req,res){
   
   let connection = db()
   let funcoes = new app.app.models.funcoes(connection)

   let id = req.params.id

   funcoes.delete(id,(err, data)=>{
     if(err)  return res.send({error : err })
     return res.send(data.rows)   
   })
}

module.exports.put = function(app,req,res){

   let connection = db()
   let funcoes =  new app.app.models.funcoes(connection)

   funcoes.put(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows) 
   })
}


 