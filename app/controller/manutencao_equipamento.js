 const db = require('../../config/dbConnection')

 module.exports.get = function(app,req,res){

    let connection = db();
    let manu_equip = new app.app.models.manutencao_equipamento(connection)

    manu_equip.get((err,data)=>{
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

 

 