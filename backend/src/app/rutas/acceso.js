const conn=require('../../config/database');


//Aqui se crean los QUERIES a la DB
module.exports = (app) => {

    //Inserccion de datos a tabla "clientes"
    app.post('/registro_usuario',(req,res) => {
        let consulta = `INSERT INTO clientes (nombre,fecha,contrasena,correo) VALUES ('${req.body.nombre}','${req.body.fecha}','${req.body.contrasena}','${req.body.correo}')`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en insercion a tabla clientes"});
            }else{
                res.json({status:1, mensaje: "Insercion a tabla cliente satisfactorio", data: []});
            }
        });
    });

    //inserccion de datos a tabla asignacion_rol
    app.post('/asignacion_usuario_rol',(req,res) => {
        id_cliente = parseInt(req.body.id_cliente);
        let consulta = `INSERT INTO asignacion_rol (tipo_usuario,id_cliente) VALUES ('${req.body.tipo_usuario}',${id_cliente})`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en insercion a tabla clientes"});
            }else{
                res.json({status:1, mensaje: "Insercion a tabla cliente satisfactorio", data: []});
            }
        });
    });
}