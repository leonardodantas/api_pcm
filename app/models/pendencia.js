function Pendencia(connection){
    this._connection = connection
}

Pendencia.prototype.inserirNovaPendencia = function(req,callback){
    console.log(req.body)
    let id_usuario_adm = req.body.id_usuario_adm
    let assunto = req.body.assunto
    let descricao = req.body.descricao
    let cod = req.body.cod
    let data_limite = req.body.data_limite

    this._connection.query(`INSERT INTO public.pendencia(
        id_usuario_adm, id_status_pendencia, assunto, descricao, cod, data_criacao, data_limite, porcetagem)
       VALUES (${id_usuario_adm}, 1 , '${assunto}', '${descricao}', '${cod}', to_timestamp(${Date.now()/1000}), '${data_limite}', 0)`, callback)

}

Pendencia.prototype.getAll = function(callback){
 this._connection.query(`SELECT * FROM PENDENCIA`, callback)

}

module.exports = function(){
    return Pendencia
}