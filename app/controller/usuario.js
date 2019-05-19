 const db = require('../../config/dbConnection')
 const crypto = require('crypto')

 module.exports.get = function(app,req,res){

    let connection = db();
    let usuario = new app.app.models.usuario(connection)

    usuario.get((err,data)=>{
       if(err)  return res.send({error : err })
       return res.send(data.rows)
      
    })
    
 }

 module.exports.getAll = function(app,req,res){

   let connection = db();
   let usuario = new app.app.models.usuario(connection)

   usuario.getAll((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)  
   })

   
}

module.exports.getAllUserForPend = function(app,req,res){

   let connection = db();
   let usuario = new app.app.models.usuario(connection)

   usuario.getAllUserForPend((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)  
   })

   
}

 module.exports.getQtdId = function(app,req,res){

   let connection = db();
   let usuario = new app.app.models.usuario(connection)

   usuario.getQtdId((err,data)=>{
      if(err)  return res.send({error : err })
      return res.send(data.rows)
     
   })
   
}
 
 module.exports.post = function(app, req, res){

   let connection = db();
   let usuario = new app.app.models.usuario(connection)

   let user = new Object()
   user.cargo_usuario = req.body.fk_cargo_usuario
   user.email = req.body.email
   user.nome = req.body.nome
   user.senha = crypto.createHash("md5").update(req.body.senha).digest("hex")

   usuario.post(user, (err, data)=>{
      if(err) return res.status(400).send({err})
      console.log(data.rows)
      return res.status(200).send(user)
   })
   
 }

 module.exports.auth = function(app,req,res){

   let connection = db()
   let usuario =  new app.app.models.usuario(connection)

   let user =  new Object()
   user.email = req.body.email
   user.senha = crypto.createHash("md5").update(req.body.senha).digest("hex")

   usuario.auth(user, (err,data)=>{
     
      if(err) return res.status(400).send({err})
      if(data.rows.length > 0){
         if(data.rows[0].email === user.email 
            && data.rows[0].senha === user.senha
            && data.rows[0].status === true){
           
            return res.status(200).send(data.rows)
         }
      }
      return res.status(400).send({err : "Dados incopativeis"}) 
   })
   
 }

 module.exports.delete = function(app,req,res){

   let connection = db()
   let usuario = new app.app.models.usuario(connection)

   let id = req.params.id

   usuario.delete(id,(err,data)=>{

      if(err) return res.status(400).send({err})
      return res.status(200).send(data)

   })
   
 }

 module.exports.put = function(app,req,res){
    let connection = db()
    let usuario =  new app.app.models.usuario(connection)

    usuario.put(req,(err,data)=>{
      if(err) return res.status(400).send({err})
      return res.status(200).send(data)

    })
    
 }