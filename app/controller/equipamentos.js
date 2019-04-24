 const db = require('../../config/dbConnection')

 module.exports.get = function(app,req,res){

    let connection = db();
    let equipamentos = new app.app.models.equipamentos(connection)

    equipamentos.get((err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
      
    })
    
 }

 
 module.exports.post = function(app,req,res){

   let connection = db();
   let equipamentos = new app.app.models.equipamentos(connection)

   equipamentos.post(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.put = function(app,req,res){

   let connection = db();
   let equipamentos = new app.app.models.equipamentos(connection)

   equipamentos.put(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

module.exports.delete = function(app,req,res){

   let connection = db();
   let equipamentos = new app.app.models.equipamentos(connection)

   equipamentos.delete(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

 