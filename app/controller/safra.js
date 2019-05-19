 const db = require('../../config/dbConnection')

 module.exports.get = function(app,req,res){

    let connection = db();
    let safra = new app.app.models.safra(connection)

    safra.get((err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
    })    
 }

 module.exports.put = function(app,req,res){

   let connection = db();
   let safra = new app.app.models.safra(connection)

   safra.put(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
   })    
}

module.exports.aumentar = function(app,req,res){

   let connection = db();
   let safra = new app.app.models.safra(connection)

   safra.aumentar(req,(err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
   })    
}
