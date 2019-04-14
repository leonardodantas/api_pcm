const db = require('../../config/dbConnection')


module.exports.get = function(app, req, res){
     
    var connection = db()
    var cargoDAO = new app.app.models.cargoDAO(connection)

    cargoDAO.get(req, (err, data)=>{
        if(err) return res.send(err)
        return res.send(data.command.rows)
    })

   
}