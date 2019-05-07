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
   
    this._connection.query(`SELECT ficha_emprestimo.id as id, data_requisicao, motivo_emprestimo, nome
      FROM public.ficha_emprestimo INNER JOIN
        equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) 
          where ficha_emprestimo.status is null and usuario_id_user = ${id} order by id asc`,callback)
    
  }
 
  FichaEmprestimo.prototype.aguardandoAll = function(callback){
    console.log('aqui')
     this._connection.query(`SELECT ficha_emprestimo.id as id, data_requisicao, motivo_emprestimo, nome
       FROM public.ficha_emprestimo INNER JOIN
         equipamento on (ficha_emprestimo.id_emprestimo = equipamento.id ) 
           where ficha_emprestimo.status is null order by id asc`,callback)
     
   }
 


 module.exports = function(){
     return FichaEmprestimo
 } 