 const db = require('../../config/dbConnection')
 const crypto = require('crypto')

 module.exports.get = function(app,req,res){

    let connection = db();
    let cargo = new app.app.models.cargos(connection)

    cargo.get((err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
      
    })
    
 }

