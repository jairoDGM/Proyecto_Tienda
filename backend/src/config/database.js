const mysql = require('mysql');

//CREACION DE CONEXION CON MYSQL

//HOST, PASSWORD, PORT MODIFICAR A CONVENIENCIA


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_tienda_ct',
    port:'3306'
});

//Vemos si la base de datos conecto

conn.connect(err => {
    if(err){
        console.log('Error en db: ',err);
        return;
    }else{
        console.log('Base de datos conectada');
    }
});

module.exports=conn;