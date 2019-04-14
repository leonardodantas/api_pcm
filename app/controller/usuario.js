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
 
 module.exports.post = function(app, req, res){

   let connection = db();
   let usuario = new app.app.models.usuario(connection)

   let user = new Object()
   user.cargo_usuario = req.body.cargo_usuario
   user.email = req.body.email
   user.nome = req.body.nome
   user.senha = crypto.createHash("md5").update(req.body.senha).digest("hex")

   console.log(user)
   usuario.post(user, (err, data)=>{
      if(err) return res.status(400).send({err})
      return res.status(200).send(data.rows)
   })
 }