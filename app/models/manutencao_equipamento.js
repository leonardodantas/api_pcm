 function ManutencaoEquipamento(connection){
    this._connection = connection
 }

 ManutencaoEquipamento.prototype.get = function(callback){
    this._connection.query(`SELECT manutencao_equipamento.id , id_equipamento, id_usuario, descricao_envio_user, descricao_final_manu, descricao_atual_manu, data_envio, data_realizado, nome
    FROM manutencao_equipamento inner join
     equipamento on (manutencao_equipamento.id_equipamento = equipamento.id)
       ORDER BY ID ASC`,
                callback)
 }

 ManutencaoEquipamento.prototype.post = function(req,callback){
    
   let id_equipamento = req.body.id_equipamento
   let id_usuario = req.body.id_usuario
   let descricao_envio_user = req.body.descricao_envio_user
   console.log(Date.now()/ 1000.0)
   this._connection.query(`INSERT INTO manutencao_equipamento(
      id_equipamento, id_usuario, descricao_envio_user, data_envio)
      VALUES ('${id_equipamento}', '${id_usuario}', '${descricao_envio_user}', to_timestamp(${Date.now()/1000}))`, callback)
 }



 module.exports = function(){
     return ManutencaoEquipamento
 } 