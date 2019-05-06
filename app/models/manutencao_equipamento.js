 function ManutencaoEquipamento(connection){
    this._connection = connection
 }

 ManutencaoEquipamento.prototype.get = function(callback){
    this._connection.query(`SELECT manutencao_equipamento.id , id_equipamento, id_usuario, descricao_envio_user, descricao_final_manu, descricao_atual_manu, data_envio, data_realizado, nome
    FROM manutencao_equipamento inner join
     equipamento on (manutencao_equipamento.id_equipamento = equipamento.id) 
     WHERE DESCRICAO_ATUAL_MANU IS NULL ORDER BY ID ASC`,
                callback)
 }

 ManutencaoEquipamento.prototype.getAll = function(callback){
  this._connection.query(`SELECT manutencao_equipamento.id , id_equipamento, id_usuario, descricao_envio_user, descricao_final_manu, descricao_atual_manu, data_envio, data_realizado, nome
  FROM manutencao_equipamento inner join
   equipamento on (manutencao_equipamento.id_equipamento = equipamento.id) ORDER BY ID ASC`,
              callback)
}

 ManutencaoEquipamento.prototype.post = function(req,callback){
    
   let id_equipamento = req.body.id_equipamento
   let id_usuario = req.body.id_usuario
   let descricao_envio_user = req.body.descricao_envio_user
   
   this._connection.query(`INSERT INTO manutencao_equipamento(
      id_equipamento, id_usuario, descricao_envio_user, data_envio)
      VALUES ('${id_equipamento}', '${id_usuario}', '${descricao_envio_user}', to_timestamp(${Date.now()/1000}))`, callback)
 }

 ManutencaoEquipamento.prototype.put = function(req,callback){

  let id_manutencao = req.body.id
  let descricao_atual_manu = req.body.descricao_atual_manu

  this._connection.query(`UPDATE MANUTENCAO_EQUIPAMENTO SET DESCRICAO_ATUAL_MANU = '${descricao_atual_manu}' WHERE ID = ${id_manutencao}`,callback)
 }

 ManutencaoEquipamento.prototype.atualizar = function(req, callback){

  let id = req.body.id
  let descricao_final = req.body.descricao_final_manu

  this._connection.query(`UPDATE MANUTENCAO_EQUIPAMENTO SET DESCRICAO_FINAL_MANU = '${descricao_final}', DATA_REALIZADO = to_timestamp(${Date.now()/1000}) WHERE ID = ${id}`,callback)
 }

 ManutencaoEquipamento.prototype.finally = function(callback){

   this._connection.query(`SELECT manutencao_equipamento.id , id_equipamento, id_usuario, descricao_envio_user, descricao_final_manu, descricao_atual_manu, data_envio, data_realizado, nome
   FROM manutencao_equipamento inner join
    equipamento on (manutencao_equipamento.id_equipamento = equipamento.id) WHERE data_realizado IS NOT NULL
      ORDER BY ID ASC`, callback)

 }

 ManutencaoEquipamento.prototype.started = function(callback){

  this._connection.query(`SELECT manutencao_equipamento.id , id_equipamento, id_usuario, descricao_envio_user, descricao_final_manu, descricao_atual_manu, data_envio, data_realizado, nome
  FROM manutencao_equipamento inner join
   equipamento on (manutencao_equipamento.id_equipamento = equipamento.id) WHERE descricao_atual_manu IS NOT NULL AND data_realizado is null
     ORDER BY ID ASC`, callback)
 }



 module.exports = function(){
     return ManutencaoEquipamento
 } 