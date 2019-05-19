function PendenciaUsuario(connection){
    this._connection = connection
}

PendenciaUsuario.prototype.inserirNovo = function(req,callback){
    
    let id_usuario = req.body.id_usuario
    let id_pendencia = req.body.id_pendencia

    this._connection.query(`INSERT INTO public.pendencia_usuario(
        id_usuario, id_pendencia, porc_total_atual, descricao)
       VALUES (${id_usuario}, ${id_pendencia}, 0, null);`, callback)

}

PendenciaUsuario.prototype.getAllUserPend = function(req,callback){

    let id = req.params.id

    this._connection.query(`SELECT  id_usuario, id_pendencia, porc_total_atual, descricao
    FROM public.pendencia_usuario where id_pendencia = ${id} ;`, callback)

}

module.exports = function(){
    return PendenciaUsuario
}