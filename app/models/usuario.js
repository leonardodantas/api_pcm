 function Usuario(connection){
     this._connection = connection
 }

 Usuario.prototype.get = function(callback){
     this._connection.query(`SELECT USUARIOS.ID AS ID, NOME,EMAIL,CARGO FROM USUARIOS 
        INNER JOIN CARGO_USUARIO ON ( USUARIOS.FK_CARGO_USUARIO = CARGO_USUARIO.ID)
            WHERE STATUS = FALSE `,
                callback)
 }

 Usuario.prototype.getQtdId = function(callback){
    this._connection.query(`SELECT COUNT(ID) FROM USUARIOS WHERE STATUS = FALSE`,
               callback)
}

 Usuario.prototype.post = function(user, callback){
     this._connection.query(
         `INSERT INTO USUARIOS 
            (fk_cargo_usuario, email, nome, senha, status) 
                VALUES ('${user.cargo_usuario}','${user.email}','${user.nome}', '${user.senha}', '0' )`, callback)
 }

 Usuario.prototype.auth = function(user,callback){

     this._connection.query(
         `SELECT * FROM USUARIOS 
            WHERE EMAIL = '${user.email}' AND SENHA = '${user.senha}'`,
            callback)
     
 }

 Usuario.prototype.delete = function(id, callback){
    
    this._connection.query(
        `DELETE FROM USUARIOS WHERE ID = '${id}'`,
            callback)
            
 }

 Usuario.prototype.put = function(req, callback){

    console.log(req.body)
    let id = req.body.id
    let fk_cargo_usuario = req.body.fk_cargo_usuario

    this._connection.query(
        `UPDATE usuarios
        SET fk_cargo_usuario = ${fk_cargo_usuario} , status = true
        WHERE id = ${id}`, callback
    )
 }

 module.exports = function(){
     return Usuario
 } 