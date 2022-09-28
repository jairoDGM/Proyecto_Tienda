const conn=require('../../config/database');


//Aqui se crean los QUERIES a la DB
module.exports = (app) => {
    app.post('/registro_usuario',(req,res) => {
        let consulta = `INSERT INTO clientes (nombre,fecha,contrasena,correo) VALUES ('${req.body.nombre}','${req.body.fecha}','${req.body.contrasena}','${req.body.correo}')`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Insercion de cliente satisfactorio", data: []});
            }
        });

    });

}