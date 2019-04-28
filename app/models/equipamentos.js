 function Equipamento(connection){
    this._connection = connection
 }

 Equipamento.prototype.get = function(callback){
    this._connection.query(`SELECT * FROM EQUIPAMENTO  ORDER BY ID ASC`,
                callback)
 }

 Equipamento.prototype.getAll = function(callback){
   this._connection.query(`SELECT * FROM EQUIPAMENTO ORDER BY ID ASC`,
               callback)
}

 Equipamento.prototype.post = function(req,callback){

    let equipamento = req.body.nome    
    this._connection.query(`INSERT INTO EQUIPAMENTO (NOME,STATUS) VALUES ('${equipamento}', 'LIVRE')`,callback)
 }

 Equipamento.prototype.atualizarEquip = function(req, callback){

   let id = req.body.id
   let status = req.body.status
   console.log(req.body)
   this._connection.query(`UPDATE EQUIPAMENTO SET STATUS = '${status}' WHERE ID = '${id}'`,callback)
 }

 Equipamento.prototype.put = function(req, callback){

    let id = req.body.id
    let nome = req.body.nome
    this._connection.query(`UPDATE EQUIPAMENTO SET NOME = '${nome}' WHERE ID = '${id}'`, callback)
 }

 Equipamento.prototype.delete = function(req,callback){

    let id = req.body.id
    this._connection.query(`DELETE FROM EQUIPAMENTO WHERE ID = '${id}'`,callback)
 }



 module.exports = function(){
     return Equipamento
 } 