 function Usuario(connection){
     this._connection = connection
 }

 Usuario.prototype.get = function(callback){
     this._connection.query("SELECT * FROM USUARIOS",callback)
 }

 Usuario.prototype.post = function(user, callback){
     this._connection.query(
         `INSERT INTO USUARIOS 
            (fk_cargo_usuario, email, nome, senha, status) 
                VALUES ('${user.cargo_usuario}','${user.email}','${user.nome}', '${user.senha}', '0' )`, callback)
 }

 module.exports = function(){
     return Usuario
 } 