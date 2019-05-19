 function FichaEmprestimo(connection){
    this._connection = connection
 }

FichaEmprestimo.prototype.post = function(req,callback){
  
  let usuario_id_user = req.body.usuario_id_user
  let id_emprestimo = req.body.id_emprestimo
  let motivo_emprestimo = req.body.motivo_emprestimo
  
   this._connection.query(`INSERT INTO public.ficha_emprestimo(
    usuario_id_user, id_emprestimo, data_requisicao, motivo_emprestimo,status_requisicao)
    VALUES ( ${usuario_id_user}, ${id_emprestimo}, to_timestamp(${Date.now()/1000}), '${motivo_emprestimo}', 'ALUGADO')`,callback)
   
 }

 FichaEmprestimo.prototype.aguardando = function(req,callback){
  
   let id = req.params.id
   
    this._connection.query(`SELECT ficha_emprestimo.id as id,usuarios.nome as nome_usuario, data_requisicao, motivo_emprestimo, equipamento.nome as nome
    FROM public.ficha_emprestimo INNER JOIN
      equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
      (ficha_emprestimo.usuario_id_user = usuarios.id)
        where ficha_emprestimo.status is null and usuario_id_user = ${id} order by id asc`,callback)
    
  }

  FichaEmprestimo.prototype.liberadas = function(req,callback){
  
    let id = req.params.id
    
     this._connection.query(`SELECT ficha_emprestimo.id as id, id_emprestimo,usuarios.nome as nome_usuario, data_requisicao, data_emprestimo,motivo_emprestimo, equipamento.nome as nome
     FROM public.ficha_emprestimo INNER JOIN
       equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
       (ficha_emprestimo.usuario_id_user = usuarios.id)
         where ficha_emprestimo.status = true and usuario_id_user = ${id} and data_devolucao is null order by id asc`,callback)
     
   }

   FichaEmprestimo.prototype.devolver = function(req,callback){

    let id = req.body.id

    this._connection.query(`UPDATE public.ficha_emprestimo
    SET  data_devolucao= to_timestamp(${Date.now()/1000})
    WHERE id = ${id}`, callback)
   }

   FichaEmprestimo.prototype.rejeitadas = function(req,callback){
  
    let id = req.params.id
    
     this._connection.query(`SELECT ficha_emprestimo.id as id,usuarios.nome as nome_usuario, data_requisicao, data_emprestimo, motivo_emprestimo, equipamento.nome as nome
     FROM public.ficha_emprestimo INNER JOIN
       equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
       (ficha_emprestimo.usuario_id_user = usuarios.id)
         where ficha_emprestimo.status = false and usuario_id_user = ${id} order by id asc`,callback)
     
   }

   FichaEmprestimo.prototype.all = function(req,callback){
  
    let id = req.params.id
    
     this._connection.query(`SELECT ficha_emprestimo.id as id,usuarios.nome as nome_usuario, data_requisicao, motivo_emprestimo, equipamento.nome as nome
     FROM public.ficha_emprestimo INNER JOIN
       equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
       (ficha_emprestimo.usuario_id_user = usuarios.id)
         where usuario_id_user = ${id} order by id asc`,callback)
     
   }
 
 
  FichaEmprestimo.prototype.aguardandoAll = function(callback){
    
     this._connection.query(`SELECT ficha_emprestimo.id as id,id_emprestimo,usuarios.nome as nome_usuario, data_requisicao, motivo_emprestimo, equipamento.nome as nome
     FROM public.ficha_emprestimo INNER JOIN
       equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
       (ficha_emprestimo.usuario_id_user = usuarios.id)
         where ficha_emprestimo.status is null order by id asc`,callback)
     
   }

   FichaEmprestimo.prototype.recusar = function(req,callback){

    let id = req.body.id
    this._connection.query(`UPDATE FICHA_EMPRESTIMO SET STATUS = FALSE, data_emprestimo = to_timestamp(${Date.now()/1000}) WHERE ID = ${id} `, callback)
   }

   FichaEmprestimo.prototype.aceitar = function(req,callback){

    let id = req.body.id
    this._connection.query(`UPDATE FICHA_EMPRESTIMO SET STATUS = TRUE, DATA_EMPRESTIMO = to_timestamp(${Date.now()/1000}) WHERE ID = ${id}`, callback)
   }

   FichaEmprestimo.prototype.getAllAlugadas = function(callback){
  
    this._connection.query(`SELECT ficha_emprestimo.id as id, id_emprestimo,usuarios.nome as nome_usuario, data_requisicao, data_emprestimo,motivo_emprestimo, equipamento.nome as nome
    FROM public.ficha_emprestimo INNER JOIN
      equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
      (ficha_emprestimo.usuario_id_user = usuarios.id)
        where ficha_emprestimo.status = true  and data_devolucao is null order by id asc`, callback)
   }

   FichaEmprestimo.prototype.getAllFinalizadas = function(callback){
  
    this._connection.query(`SELECT ficha_emprestimo.id as id, id_emprestimo,usuarios.nome as nome_usuario, data_requisicao, data_emprestimo, data_devolucao,motivo_emprestimo, equipamento.nome as nome
    FROM public.ficha_emprestimo INNER JOIN
      equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) inner join usuarios on
      (ficha_emprestimo.usuario_id_user = usuarios.id)
        where ficha_emprestimo.status = true  and data_devolucao is not null order by id asc`, callback)
   }



 


 module.exports = function(){
     return FichaEmprestimo
 } 
 