const db = require('../../config/dbConnection')

module.exports.get = function(app, req, res){

    let connection = db()
    let cargoDAO =  new app.app.models.cargoDAO(connection)

    cargoDAO.get((err, data)=>{
        if(err) return res.send({err})
        return res.send(data.rows)
    })
}