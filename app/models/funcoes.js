 function Funcoes(connection){
     this._connection = connection
 }

 Funcoes.prototype.get = function(callback){
     this._connection.query(`SELECT * FROM FUNCOES_USUARIO`,
                callback)
 }

 Funcoes.prototype.post = function(req, callback){
     let funcao = req.body.funcao
     console.log(req.body)
     this._connection.query(`INSERT INTO FUNCOES_USUARIO (FUNCAO) VALUES ('${funcao}')`, callback)
 }

 Funcoes.prototype.delete = function(id, callback){

    this._connection.query(`DELETE FROM FUNCOES_USUARIO WHERE ID = '${id}'`, callback)
 }

 Funcoes.prototype.put = function(req, callback){
    let funcao = req.body.funcao
    let id = req.body.id

    this._connection.query(`UPDATE funcoes_usuario
	set funcao = '${funcao}'
	WHERE id = '${id}' ;`,
    callback)
 }

 module.exports = function(){
     return Funcoes
 } 