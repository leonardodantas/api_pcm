 function Cargos(connection){
     this._connection = connection
 }

 Cargos.prototype.get = function(callback){
     this._connection.query(`SELECT id, cargo
     FROM cargo_usuario`,
                callback)
 }



 module.exports = function(){
     return Cargos
 } 