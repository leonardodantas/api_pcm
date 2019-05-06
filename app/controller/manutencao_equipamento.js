 const db = require('../../config/dbConnection')

 module.exports.get = function(app,req,res){

    let connection = db();
    let manu_equip = new app.app.models.manutencao_equipamento(connection)

    manu_equip.get((err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
      
    })
    
 }

 module.exports.getAll = function(app,req,res){

   let connection = db();
   let manu_equip = new app.app.models.manutencao_equipamento(connection)

   manu_equip.getAll((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}

 module.exports.post = function(app,req,res){

   let connection = db()
   let manu_equip = new app.app.models.manutencao_equipamento(connection)

   manu_equip.post(req,(err, data)=>{
      if(err) return res.send({ error : err})
      return res.send(data.rows)
   })
 }
 
module.exports.put = function(app,req,res){

   let connection = db()
   let manu_equip = new app.app.models.manutencao_equipamento(connection)

   manu_equip.put(req,(err, data)=>{
      if(err) return res.send({ error : err})
      return res.send(data.rows)
   })
 }

 module.exports.atualizar = function(app,req,res){
   
   let connection = db()
   let manu_equip = new app.app.models.manutencao_equipamento(connection)

   manu_equip.atualizar(req,(err, data)=>{
      if(err) return res.send({ error : err})
      return res.send(data.rows)
   })
 }

 module.exports.finally = function(app,req,res){

   let connection = db()
   let manu_equip = new app.app.models.manutencao_equipamento(connection)

   manu_equip.finally((err,data)=>{
      if(err) return res.send({ error : err })
      return res.send(data.rows)
   })
 }

 module.exports.started = function(app,req,res){

   let connection = db()
   let manu_equip = new app.app.models.manutencao_equipamento(connection)

   manu_equip.started((err,data)=>{
      if(err) return res.send({ error: err })
      return res.send(data.rows)
   })
 }

 

 