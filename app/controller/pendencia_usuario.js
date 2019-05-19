const db = require('../../config/dbConnection');

module.exports.inserirNovo = function(app,req,res){

    let connection = db()
    let pendencia_usuario =  new app.app.models.pendencia_usuario(connection)

    pendencia_usuario.inserirNovo(req,(err, data)=>{
        if(err)  return res.send({error : err })
        return res.send(data.rows)
    })
}

module.exports.getAllUserPend = function(app,req,res){

    let connection = db()
    let pendencia_usuario =  new app.app.models.pendencia_usuario(connection)

    pendencia_usuario.getAllUserPend(req,(err, data)=>{
        if(err)  return res.send({error : err })
        return res.send(data.rows)
    })
}