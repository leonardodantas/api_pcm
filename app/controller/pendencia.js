const db = require('../../config/dbConnection');

module.exports.inserirNovaPendencia = function(app,req,res){

    let connection = db()
    let pendencia =  new app.app.models.pendencia(connection)

    pendencia.inserirNovaPendencia(req,(err, data)=>{
        if(err)  return res.send({error : err })
        return res.send(data.rows)
    })
}

module.exports.getAll = function(app,req,res){

    let connection = db()
    let pendencia =  new app.app.models.pendencia(connection)

    pendencia.getAll((err, data)=>{
        if(err)  return res.send({error : err })
        return res.send(data.rows)
    })
}