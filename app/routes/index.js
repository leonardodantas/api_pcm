module.exports = function(app){

    app.get('/',(req,res)=>{
        return res.send({message : "OK"})
    })
}