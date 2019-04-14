const pg = require('pg');

module.exports = function(){
    const connString = "postgres://postgres:1234@localhost:5432/bd_pcm"
    const conexao = new pg.Client(connString);

    conexao.connect()
    
    return conexao
}


