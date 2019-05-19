 function Safra(connection){
     this._connection = connection
 }

 Safra.prototype.get = function(callback){
     this._connection.query(`SELECT id, codigo_safra, qtd_codigo
     FROM public.codigo_safra where id =  1`,
                callback)
 }

 Safra.prototype.put = function(req,callback){

    let codigo_safra = req.body.codigo_safra

    this._connection.query(`UPDATE public.codigo_safra
	    set codigo_safra = '${codigo_safra}', qtd_codigo=1
	        WHERE id = 1; `,
               callback)
}

Safra.prototype.aumentar = function(req,callback){

    this._connection.query(`UPDATE public.codigo_safra
	    set  qtd_codigo=qtd_codigo + 1
	        WHERE id = 1; `,
               callback)
}
 module.exports = function(){
     return Safra
 } 