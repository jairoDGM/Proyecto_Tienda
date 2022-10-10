const conn=require('../../config/database');
const jwt= require('jsonwebtoken');
const secretKey = "claveSecretaJWT"
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


    app.post('/registro_producto',(req,res) => {
        precio = parseFloat(req.body.precio);
        cantidad_bodega = parseInt(req.body.cantidad_bodega);
        let consulta = `INSERT INTO productos (precio,nombre_producto,cantidad_bodega,descripcion_producto,imagen) VALUES (${precio},'${req.body.nombre_producto}',${cantidad_bodega},'${req.body.descripcion_producto}','${req.body.imagen}')`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Se inserto el producto correctamente", data: []});
            }
        });
    });


    app.get('/registro_producto',(req,res) => {
        let consulta = `SELECT * FROM productos `;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Productos Obtenidos", data: rows});
            }
        });
    });


    app.get('/registro_usuario_con_rol',(req,res) => {
        let consulta = `SELECT * FROM clientes INNER JOIN asignacion_rol ON clientes.id_cliente=asignacion_rol.id_cliente`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Productos Obtenidos", data: rows});
            }
        });
    });


    app.get('/registro_usuario',(req,res) => {
        let consulta = `SELECT * FROM clientes `;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Productos Obtenidos", data: rows});
            }
        });
    });


    app.post('/registro_Rol',(req,res) => {
        id_cliente = parseInt(req.body.id_cliente);
        let consulta = `INSERT INTO asignacion_rol (tipo_usuario,id_cliente) VALUES ('${req.body.tipo_usuario}',${id_cliente})`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Se inserto el producto correctamente", data: []});
            }
        });
    });


    app.delete("/registro_usuario/:id_cliente",(req,res)=> {
        console.log(req.body);
        const{id_cliente} = req.params
        let consulta = `DELETE FROM asignacion_rol WHERE id_cliente = '${id_cliente}'`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"No se pudo eliminar el Rol"});
            }else{
                res.json({status:1, mensaje: "Se pudo eliminar el Rol"});
            }
        });
    });


    app.delete("/registro_producto/:codigo_producto",(req,res)=> {
        console.log(req.body);
        const{codigo_producto} = req.params
        let consulta = `DELETE FROM productos WHERE codigo_producto = '${codigo_producto}'`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"No se pudo eliminar el Producto"});
            }else{
                res.json({status:1, mensaje: "Producto Eliminado"});
            }
        });
    });


    app.post('/login', (req,res)=>{
        let consulta = `SELECT * FROM clientes WHERE correo = '${req.body.correo}' AND contrasena = '${req.body.contrasena}' `;
        conn.query(consulta, (err,rows,cols)  => {
            if(err){
                res.status(500).json({status:0, mensaje:"Error en la Base de datos"});
            }else{
                if(rows.length >0){
                    const token = jwt.sign({correo: req.body.correo}, secretKey, {expiresIn:'2h'});
                    res.json({status:1, mensaje: "Usuario Exitoso", key: token});
                }else {
                    res.status(400).json({status:0, mensaje: "No se encontro el usuario"});
                }
            }
        })
    })


    app.get('/consultaCompra/:id_compra',(req,res) => {
        const{id_compra} = req.params
        let consulta = `SELECT nombre_courrier FROM compra WHERE id_compra = ${id_compra}`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Se obtuvo el COURRIER correctamente", data: rows});
            }
        });
    });


    app.get('/obtiene_id_cliente/:correo',(req,res) => {
        let consulta = `SELECT id_cliente FROM clientes WHERE correo = '${req.params.correo}'`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta en tabla cliente"});
            }else{
                res.json({status:1, mensaje: "Se obtuvo el id_cliente correctamente", data: rows});
            }
        });
    });

    app.get('/obtiene_id_compra/:id_cliente',(req,res) => {
        var id_cliente = parseInt(req.params.id_cliente); 
        let consulta = `SELECT id_compra FROM compra_cliente WHERE id_cliente = ${id_cliente}`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta en tabla compra_cliente"});
            }else{
                res.json({status:1, mensaje: "Se obtuvo el id_compra correctamente", data: rows});
            }
        });
    });

    app.get('/consultarIdCompra/:id_compra',(req,res) => {
        var id_compra = parseInt(req.params.id_compra); 
        let consulta = `SELECT id_compra FROM compra WHERE id_compra = ${id_compra}`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta en tabla compra_cliente"});
            }else{
                res.json({status:1, mensaje: "Se obtuvo el id_compra correctamente", data: rows});
            }
        });
    });


    //TRANSACCION COMPRAS - PAGO FORMULARIO
    app.post('/ingreso_pagoFormulario1',(req,res) => {
        var total_pagar = parseFloat(req.body.total_pagar);
        var id_compra = parseInt(req.body.id_compra);
        let consulta = `INSERT INTO compra (id_compra,nombre_courrier,compania_tarjeta,total_pagar) VALUES (${req.body.id_compra},'${req.body.nombre_courrier}','${req.body.compania_tarjeta}',${total_pagar})`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en compra"});
            }else{
                res.json({status:1, mensaje: "Insercion de datos en tabla compra satisfactorio", data: rows});
            }
        });
    });

    //TRASACCION COMPRA_CLIENTES - PAGO FORMULARIO
    app.post('/ingreso_pagoFormulario2',(req,res) => {
        var id_cliente = parseInt(req.body.id_cliente);
        var id_compra = parseInt(req.body.id_compra);
        let consulta = `INSERT INTO compra_cliente (id_cliente, id_compra) VALUES (${id_cliente}, ${id_compra})`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en compra_cliente"});
            }else{
                res.json({status:1, mensaje: "Insercion de datos en tabla compra_cliente satisfactorio", data: []});
            }
        });

    });

}